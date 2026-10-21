// Emerald contour field — fullscreen WebGL background.
// Topographic iso-lines of a slowly warping noise field, lit by the cursor.
(function () {
  const canvas = document.getElementById('field');
  if (!canvas) return;
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl || !gl.getExtension('OES_standard_derivatives')) {
    canvas.style.display = 'none';
    return;
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const vert = `
    attribute vec2 p;
    void main() { gl_Position = vec4(p, 0.0, 1.0); }
  `;

  const frag = `
    #extension GL_OES_standard_derivatives : enable
    precision highp float;
    uniform vec2 u_res;
    uniform float u_time;
    uniform vec2 u_mouse;
    uniform float u_scroll;
    uniform float u_energy;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }
    float noise(vec2 p) {
      vec2 i = floor(p), f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                 mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
    }
    float fbm(vec2 p) {
      float v = 0.0, a = 0.5;
      mat2 r = mat2(0.8, 0.6, -0.6, 0.8);
      for (int i = 0; i < 5; i++) { v += a * noise(p); p = r * p * 2.03; a *= 0.5; }
      return v;
    }

    void main() {
      vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;
      vec2 m = (u_mouse - 0.5 * u_res) / u_res.y;
      float t = u_time * 0.035;

      vec2 sp = p + vec2(0.0, u_scroll * 0.35);
      vec2 q = vec2(fbm(sp * 1.25 + vec2(t, -t * 0.6)), fbm(sp * 1.25 + vec2(5.2 - t * 0.7, 1.3 + t)));
      float h = fbm(sp * 1.1 + q * 1.6);

      float md = length(p - m);
      float lens = exp(-md * md * 7.0);
      h += lens * 0.05;

      float f = h * 30.0;
      float w = fwidth(f);
      float g = abs(fract(f - 0.5) - 0.5);
      float line = 1.0 - smoothstep(0.0, w * 1.15, g);
      float f5 = f / 5.0;
      float g5 = abs(fract(f5 - 0.5) - 0.5) * 5.0;
      float major = 1.0 - smoothstep(0.0, w * 1.6, g5);

      vec3 bg = vec3(0.071, 0.082, 0.086);
      vec3 emerald = vec3(0.184, 0.878, 0.651);
      vec3 deep = vec3(0.043, 0.478, 0.361);

      float vig = smoothstep(1.35, 0.15, length(p * vec2(0.85, 1.0)));
      float glow = 1.0 + lens * 1.8;
      float k = (line * 0.03 + major * 0.075) * glow * u_energy * (0.35 + 0.65 * vig);

      vec3 col = bg;
      col += mix(deep, emerald, clamp(lens * 1.5 + major * 0.4, 0.0, 1.0)) * k;

      // Soft emerald haze breathing in the upper right and a cool counter-glow bottom left
      float haze = exp(-length(p - vec2(0.62 + 0.05 * sin(t * 3.0), 0.34)) * 2.6) * 0.07;
      float haze2 = exp(-length(p - vec2(-0.75, -0.5)) * 3.2) * 0.035;
      col += deep * haze * u_energy + vec3(0.06, 0.12, 0.14) * haze2;
      col += emerald * lens * 0.018 * u_energy;

      col *= mix(0.88, 1.0, vig);
      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn(gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }
  const vs = compile(gl.VERTEX_SHADER, vert);
  const fs = compile(gl.FRAGMENT_SHADER, frag);
  if (!vs || !fs) { canvas.style.display = 'none'; return; }
  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const u = {
    res: gl.getUniformLocation(prog, 'u_res'),
    time: gl.getUniformLocation(prog, 'u_time'),
    mouse: gl.getUniformLocation(prog, 'u_mouse'),
    scroll: gl.getUniformLocation(prog, 'u_scroll'),
    energy: gl.getUniformLocation(prog, 'u_energy'),
  };

  let scale = 1;
  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    // Render below native resolution: the field is soft by nature and this keeps it cheap.
    scale = window.innerWidth < 800 ? 0.6 * dpr : 0.75 * dpr;
    canvas.width = Math.round(window.innerWidth * scale);
    canvas.height = Math.round(window.innerHeight * scale);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(u.res, canvas.width, canvas.height);
  }
  resize();
  window.addEventListener('resize', resize);

  const mouse = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.4 };
  const smooth = { x: mouse.x, y: mouse.y };
  window.addEventListener('pointermove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

  let visible = true;
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; if (visible) loop(); });

  const start = performance.now();
  let energy = 1;
  function frame(now) {
    smooth.x += (mouse.x - smooth.x) * 0.06;
    smooth.y += (mouse.y - smooth.y) * 0.06;
    const vh = window.innerHeight;
    const sy = window.scrollY;
    // Lines live on the first screen only; below it the page settles into a plain matte surface.
    const target = Math.max(0, 1 - sy / (vh * 0.9));
    energy += (target - energy) * 0.08;
    canvas.style.opacity = Math.min(1, energy * 1.4).toFixed(3);
    gl.uniform1f(u.time, reduced ? 12 : (now - start) / 1000);
    gl.uniform2f(u.mouse, smooth.x * scale, (vh - smooth.y) * scale);
    gl.uniform1f(u.scroll, sy / vh);
    gl.uniform1f(u.energy, energy);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  let raf = 0;
  function loop() {
    cancelAnimationFrame(raf);
    const tick = (now) => {
      if (!visible) return;
      // Skip GPU work once the field has faded out behind the content.
      if (!(energy < 0.01 && window.scrollY > window.innerHeight)) frame(now);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
  }
  loop();
})();
