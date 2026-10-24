// Pix product page: hero logo art scaling and three small live demos (IK chain, interpolation
// curves, liquid shapes). Each demo only animates while it is on screen.
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NS = 'http://www.w3.org/2000/svg';

  // Run fn(dt, t) every frame while el is visible.
  function loop(el, fn) {
    let raf = 0, last = 0, on = false;
    const tick = (t) => { const dt = Math.min(0.05, (t - (last || t)) / 1000); last = t; fn(dt, t / 1000); raf = requestAnimationFrame(tick); };
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !on) { on = true; last = 0; raf = requestAnimationFrame(tick); }
      else if (!e.isIntersecting && on) { on = false; cancelAnimationFrame(raf); }
    }).observe(el);
    if (reduce) fn(0, 1.2);
  }

  // ---------- Hero art: the flying layer is laid out in a 600×600 box ----------
  const art = document.querySelector('.px-art');
  const fly = art && art.querySelector('.px-art__fly');
  if (art && fly) new ResizeObserver(([e]) => { fly.style.transform = `scale(${e.contentRect.width / 600})`; }).observe(art);

  // ---------- IK chain ----------
  const ik = document.querySelector('[data-ik]');
  if (ik) {
    const svg = ik.querySelector('svg');
    const skin = ik.querySelector('.px-ik__skin');
    const bonesG = ik.querySelector('.px-ik__bones');
    const target = ik.querySelector('.px-ik__target');
    const toggle = document.querySelector('[data-ik-bones]');
    const W = 800, H = 420, base = { x: 400, y: 400 };
    const lens = [120, 100, 82, 64];
    const widths = [34, 28, 21, 14, 6];
    let pts = [base];
    lens.forEach((l, i) => pts.push({ x: base.x, y: pts[i].y - l }));
    let goal = { x: 560, y: 120 }, aim = { ...goal }, user = false, idle = 0;

    const bones = lens.map(() => {
      const p = document.createElementNS(NS, 'path'); p.setAttribute('class', 'px-ik__bone'); bonesG.appendChild(p); return p;
    });
    const joints = pts.map(() => {
      const c = document.createElementNS(NS, 'circle'); c.setAttribute('class', 'px-ik__joint'); c.setAttribute('r', 4); bonesG.appendChild(c); return c;
    });

    function solve(t) {
      for (let it = 0; it < 12; it++) {
        pts[pts.length - 1] = { ...t };
        for (let i = pts.length - 2; i >= 0; i--) {
          const a = pts[i + 1], b = pts[i], d = Math.hypot(b.x - a.x, b.y - a.y) || 1;
          pts[i] = { x: a.x + (b.x - a.x) * lens[i] / d, y: a.y + (b.y - a.y) * lens[i] / d };
        }
        pts[0] = { ...base };
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1], b = pts[i], d = Math.hypot(b.x - a.x, b.y - a.y) || 1;
          pts[i] = { x: a.x + (b.x - a.x) * lens[i - 1] / d, y: a.y + (b.y - a.y) * lens[i - 1] / d };
        }
      }
    }

    // A tapered ribbon around the chain: offsets on both sides, smoothed with quadratic curves.
    function ribbon() {
      const L = [], R = [];
      pts.forEach((p, i) => {
        const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)];
        let nx = -(b.y - a.y), ny = b.x - a.x; const d = Math.hypot(nx, ny) || 1; nx /= d; ny /= d;
        const w = widths[i];
        L.push({ x: p.x + nx * w, y: p.y + ny * w }); R.push({ x: p.x - nx * w, y: p.y - ny * w });
      });
      const tip = pts[pts.length - 1], prev = pts[pts.length - 2];
      const dx = tip.x - prev.x, dy = tip.y - prev.y, dl = Math.hypot(dx, dy) || 1;
      const cap = { x: tip.x + dx / dl * 22, y: tip.y + dy / dl * 22 };
      const mid = (p, q) => ({ x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 });
      let d = `M${L[0].x},${L[0].y}`;
      for (let i = 1; i < L.length - 1; i++) { const m = mid(L[i], L[i + 1]); d += ` Q${L[i].x},${L[i].y} ${m.x},${m.y}`; }
      d += ` Q${L[L.length - 1].x},${L[L.length - 1].y} ${cap.x},${cap.y}`;
      d += ` Q${R[R.length - 1].x},${R[R.length - 1].y} ${mid(R[R.length - 1], R[R.length - 2]).x},${mid(R[R.length - 1], R[R.length - 2]).y}`;
      for (let i = R.length - 2; i > 0; i--) { const m = mid(R[i], R[i - 1]); d += ` Q${R[i].x},${R[i].y} ${m.x},${m.y}`; }
      d += ` L${R[0].x},${R[0].y} Z`;
      skin.setAttribute('d', d);
    }

    // Bones drawn as Moho/Pix-style diamonds from joint to joint.
    function drawBones() {
      for (let i = 0; i < lens.length; i++) {
        const a = pts[i], b = pts[i + 1], dx = b.x - a.x, dy = b.y - a.y, l = Math.hypot(dx, dy) || 1;
        const nx = -dy / l, ny = dx / l, s = Math.min(10, l * 0.12), k = 0.18;
        const m = { x: a.x + dx * k, y: a.y + dy * k };
        bones[i].setAttribute('d', `M${a.x},${a.y} L${m.x + nx * s},${m.y + ny * s} L${b.x},${b.y} L${m.x - nx * s},${m.y - ny * s} Z`);
      }
      pts.forEach((p, i) => { joints[i].setAttribute('cx', p.x); joints[i].setAttribute('cy', p.y); });
    }

    function toLocal(e) {
      const r = svg.getBoundingClientRect(), s = Math.max(W / r.width, H / r.height);
      const ox = (r.width * s - W) / 2, oy = (r.height * s - H) / 2;
      return { x: (e.clientX - r.left) * s - ox, y: (e.clientY - r.top) * s - oy };
    }
    ik.addEventListener('pointermove', (e) => { aim = toLocal(e); user = true; idle = 0; });
    ik.addEventListener('pointerleave', () => { user = false; });
    if (toggle) toggle.addEventListener('change', () => ik.classList.toggle('no-bones', !toggle.checked));

    loop(ik, (dt, t) => {
      idle += dt;
      if (!user || idle > 2.5) aim = { x: 400 + Math.sin(t * 0.9) * 230, y: 150 + Math.sin(t * 1.8) * 70 };
      const k = 1 - Math.exp(-dt * 9);
      goal.x += (aim.x - goal.x) * (reduce ? 1 : k); goal.y += (aim.y - goal.y) * (reduce ? 1 : k);
      solve(goal); ribbon(); drawBones();
      target.setAttribute('cx', goal.x); target.setAttribute('cy', goal.y);
    });
  }

  // ---------- Interpolation curves ----------
  const graph = document.querySelector('[data-graph]');
  if (graph) {
    const curve = graph.querySelector('.px-graph__curve');
    const head = graph.querySelector('.px-graph__head');
    const dot = graph.querySelector('.px-graph__dot');
    const block = graph.querySelector('.px-graph__track i');
    const grid = graph.querySelector('.px-graph__grid');
    const X0 = 30, X1 = 370, Y0 = 225, Y1 = 88;
    for (let i = 0; i <= 8; i++) { const l = document.createElementNS(NS, 'line'); const x = X0 + (X1 - X0) * i / 8; l.setAttribute('x1', x); l.setAttribute('x2', x); l.setAttribute('y1', 20); l.setAttribute('y2', 240); grid.appendChild(l); }
    for (let i = 0; i <= 4; i++) { const l = document.createElementNS(NS, 'line'); const y = Y1 + (Y0 - Y1) * i / 4; l.setAttribute('x1', 10); l.setAttribute('x2', 390); l.setAttribute('y1', y); l.setAttribute('y2', y); grid.appendChild(l); }

    const E = {
      linear: (x) => x,
      bezier: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
      bounce: (x) => {
        const n = 7.5625, d = 2.75;
        if (x < 1 / d) return n * x * x;
        if (x < 2 / d) return n * (x -= 1.5 / d) * x + 0.75;
        if (x < 2.5 / d) return n * (x -= 2.25 / d) * x + 0.9375;
        return n * (x -= 2.625 / d) * x + 0.984375;
      },
      elastic: (x) => x === 0 || x === 1 ? x : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * (2 * Math.PI) / 3) + 1,
      back: (x) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); },
      step: (x) => x < 1 ? 0 : 1,
    };
    let ease = 'bezier';
    const P = (x, y) => [X0 + (X1 - X0) * x, Y0 + (Y1 - Y0) * y];
    function draw() {
      let d = '';
      for (let i = 0; i <= 120; i++) { const x = i / 120; const [px, py] = P(x, E[ease](x)); d += (i ? ' L' : 'M') + px.toFixed(1) + ',' + py.toFixed(1); }
      curve.setAttribute('d', d);
    }
    draw();
    graph.closest('.px-demo').querySelectorAll('[data-ease]').forEach((b) => b.addEventListener('click', () => {
      ease = b.dataset.ease; draw();
      b.parentElement.querySelectorAll('button').forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
    }));
    loop(graph, (dt, t) => {
      const cyc = 3.2, u = (t % cyc) / cyc;
      const x = Math.min(1, u / 0.78), y = E[ease](x);
      const [px, py] = P(x, y);
      head.setAttribute('x1', px); head.setAttribute('x2', px);
      dot.setAttribute('cx', px); dot.setAttribute('cy', py);
      block.style.left = (y * 100).toFixed(2) + '%';
    });
  }

  // ---------- Liquid shapes ----------
  const liquid = document.querySelector('[data-liquid]');
  if (liquid) {
    const bs = liquid.querySelectorAll('.px-liq-b');
    liquid.closest('.px-demo').querySelectorAll('[data-liq]').forEach((b) => b.addEventListener('click', () => {
      liquid.dataset.mode = b.dataset.liq;
      b.parentElement.querySelectorAll('button').forEach((o) => o.setAttribute('aria-pressed', String(o === b)));
    }));
    loop(liquid, (dt, t) => {
      const x = 238 + Math.sin(t * 0.8) * 72, y = 130 + Math.sin(t * 1.6) * 26;
      bs.forEach((c) => { c.setAttribute('cx', x.toFixed(1)); c.setAttribute('cy', y.toFixed(1)); });
    });
  }
})();
