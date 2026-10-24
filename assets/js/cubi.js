/* CUBI product page: a live copy of the island (spring physics like the app), the hero demo with a cursor,
   the skin reel, the playground, counters and the click-to-play film. Runs before main.js so the
   generated labels join the RU/EN switch. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ICON = (n) => `/assets/img/software/cubi/icons/${n}.webp`;
  const SETS = {
    main: ['folder', 'music', 'globe', 'code', 'game', 'chat', 'camera', 'brush'],
    games: ['game', 'play', 'cube', 'chart', 'chat', 'terminal'],
    create: ['brush', 'camera', 'music', 'notes', 'cube', 'calendar', 'mail'],
  };
  const isEn = () => document.documentElement.lang === 'en';

  /* ---------- Motion characters (same idea as the app's springs) ---------- */
  const MOTION = {
    smooth: { omega: 15, zeta: 1 },
    jelly: { omega: 12, zeta: 0.34 },
    robot: { robot: true },
  };

  class Island {
    constructor(el, { set = 'main', motion = 'smooth', open = false } = {}) {
      this.el = el;
      this.motion = motion;
      el.innerHTML = '<div class="cb-island__body"></div><div class="cb-island__icons"></div><i class="cb-island__pill"></i>';
      this.icons = $('.cb-island__icons', el);
      this.x = open ? 1 : 0; this.v = 0; this.target = this.x; this.lin = this.x;
      this.setIcons(set, false);
      this.raf = 0;
      this.layout();
      new ResizeObserver(() => this.layout()).observe(el.parentElement);
    }
    setIcons(name, animate = true) {
      const old = $('.cb-island__set', this.icons);
      const box = document.createElement('div');
      box.className = 'cb-island__set' + (animate ? ' is-in' : '');
      box.innerHTML = SETS[name].map((n, i) => `<img src="${ICON(n)}" alt="" style="--i:${i}" draggable="false">`).join('');
      if (old && animate) { old.classList.add('is-out'); setTimeout(() => old.remove(), 450); } else if (old) old.remove();
      this.icons.append(box);
      this.n = SETS[name].length;
      this.set = box;
      if (animate) { this.el.style.transition = 'width .45s cubic-bezier(.22,1,.36,1)'; this.layout(); setTimeout(() => { this.el.style.transition = ''; }, 460); }
    }
    layout() {
      const img = $('img', this.set);
      const s = (img && img.offsetWidth) || 40;
      this.s = s;
      this.cw = s * 3.1; this.ch = s * 0.6;
      this.ew = this.n * s + (this.n - 1) * s * 0.24 + s * 0.6; this.eh = s * 1.42;
      this.paint();
    }
    paint() {
      const p = this.x;
      const k = Math.max(0, Math.min(1, p));
      const st = this.el.style;
      st.setProperty('--p', k.toFixed(3));
      st.setProperty('--w', `${this.cw + (this.ew - this.cw) * p}px`);
      st.setProperty('--h', `${this.ch + (this.eh - this.ch) * p}px`);
      st.setProperty('--r', `${(this.ch + (this.eh * 0.72 - this.ch) * k) / 2}px`);
    }
    to(t) {
      this.target = t;
      if (reduced) { this.x = this.lin = t; this.v = 0; this.paint(); return; }
      if (!this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame((n) => this.step(n)); }
    }
    open() { this.to(1); }
    close() { this.to(0); }
    step(now) {
      const dt = Math.min(0.034, (now - this.last) / 1000); this.last = now;
      const m = MOTION[this.motion];
      let done;
      if (m.robot) {
        const dir = Math.sign(this.target - this.lin);
        this.lin = Math.max(0, Math.min(1, this.lin + dir * dt * 3.2));
        this.x = Math.round(this.lin * 5) / 5;
        done = this.lin === this.target;
      } else {
        const k = m.omega * m.omega, c = 2 * m.zeta * m.omega;
        this.v += (-k * (this.x - this.target) - c * this.v) * dt;
        this.x += this.v * dt;
        this.lin = Math.max(0, Math.min(1, this.x));
        done = Math.abs(this.x - this.target) < 0.0015 && Math.abs(this.v) < 0.01;
        if (done) { this.x = this.target; this.v = 0; }
      }
      this.paint();
      this.raf = done ? 0 : requestAnimationFrame((n) => this.step(n));
    }
    iconCenter(i) { // in the island's parent coordinates (before any 3D transform)
      const g = this.s * 0.24;
      const left = (this.el.parentElement.clientWidth - this.ew) / 2 + this.s * 0.3;
      return { x: left + i * (this.s + g) + this.s / 2, y: this.el.offsetTop + this.eh / 2 };
    }
  }

  /* ---------- Hero demo: the cursor tells the story ---------- */
  const demo = $('[data-demo]');
  if (demo) {
    const island = new Island($('[data-island]', demo));
    const cur = $('.cb-cursor', demo);
    const win = $('.cb-win', demo);
    const tag = $('.cb-group-tag', demo);
    const hint = $('.cb-hint', demo);
    let run = 0, cycle = 0, visible = false, pos = { x: 0, y: 0 };

    const W = () => demo.clientWidth, H = () => demo.clientHeight;
    const sleep = (ms, id) => new Promise((res, rej) => setTimeout(() => (id === run ? res() : rej(0)), ms));
    const place = (x, y) => { pos = { x, y }; cur.style.transform = `translate(${x}px, ${y}px)`; };
    const move = (x, y, ms, id) => {
      const a = cur.animate([{ transform: `translate(${pos.x}px, ${pos.y}px)` }, { transform: `translate(${x}px, ${y}px)` }],
        { duration: ms, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'forwards' });
      pos = { x, y };
      return a.finished.then(() => { if (id !== run) throw 0; a.commitStyles?.(); a.cancel(); cur.style.transform = `translate(${x}px, ${y}px)`; });
    };
    const groupName = { games: ['Игры', 'Games'], create: ['Творчество', 'Creative'], main: ['Главная', 'Main'] };
    const showTag = (g) => { tag.textContent = (isEn() ? 'Group · ' : 'Группа · ') + groupName[g][isEn() ? 1 : 0]; tag.classList.add('is-on'); };

    async function story(id) {
      cur.style.opacity = '1';
      if (!pos.x) place(W() * 0.72, H() * 0.72);
      while (id === run) {
        await sleep(700, id);
        const top = island.el.offsetTop + island.ch / 2;
        await move(W() / 2 + island.cw * 0.2, top, 900, id);
        hint.style.opacity = '0';
        island.open();
        await sleep(650, id);
        if (cycle++ % 2 === 0) {
          const c = island.iconCenter(1);
          await move(c.x, c.y, 550, id);
          const ic = $$('img', island.set)[1];
          ic.classList.add('is-hot');
          await sleep(250, id);
          ic.classList.remove('is-tap'); void ic.offsetWidth; ic.classList.add('is-tap');
          win.style.setProperty('--ox', `${((c.x - W() * 0.27) / (W() * 0.46)) * 100}%`);
          win.style.setProperty('--oy', `${-((win.offsetTop - c.y) / win.offsetHeight) * 100}%`);
          await sleep(160, id);
          win.classList.add('is-open');
          await sleep(500, id);
          ic.classList.remove('is-hot');
          await move(W() * 0.78, H() * 0.8, 800, id);
          island.close();
          await sleep(2400, id);
          win.classList.remove('is-open');
          await sleep(700, id);
        } else {
          for (const g of ['games', 'create', 'main']) {
            showTag(g);
            island.setIcons(g);
            cur.animate([{ translate: '0 0' }, { translate: '0 4px' }, { translate: '0 0' }], { duration: 260 });
            await sleep(1300, id);
          }
          tag.classList.remove('is-on');
          await move(W() * 0.7, H() * 0.78, 800, id);
          island.close();
          await sleep(1400, id);
        }
      }
    }
    const start = () => { if (reduced || !visible) return; run++; story(run).catch(() => {}); };
    const stop = () => { run++; cur.getAnimations().forEach((a) => a.cancel()); };

    new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop(); }, { threshold: 0.3 }).observe(demo);

    let idle;
    island.el.addEventListener('pointerenter', () => {
      stop(); clearTimeout(idle);
      cur.style.opacity = '0'; hint.style.opacity = '0';
      tag.classList.remove('is-on'); win.classList.remove('is-open');
      if (island.n !== SETS.main.length) island.setIcons('main');
      island.open();
    });
    island.el.addEventListener('pointerleave', () => { island.close(); idle = setTimeout(() => { place(W() * 0.72, H() * 0.72); start(); }, 2500); });
    island.el.addEventListener('wheel', (e) => {
      e.preventDefault();
      const order = ['main', 'games', 'create'];
      const cur2 = order.find((k) => SETS[k].length === island.n) || 'main';
      const next = order[(order.indexOf(cur2) + (e.deltaY > 0 ? 1 : 2)) % 3];
      island.setIcons(next); showTag(next);
    }, { passive: false });
    if (reduced) island.open();
  }

  /* ---------- Skin reel (generated, duplicated for a seamless loop) ---------- */
  const CARDS = [
    [{ skin: 'dark', style: 'gradient', ru: 'Тёмный · градиент', en: 'Dark · gradient' },
      { skin: 'lime', style: 'gradient', ru: 'Салатовый', en: 'Lime' },
      { skin: 'dark', style: 'glass', wall: 'light', type: true, ru: 'Жидкое стекло', en: 'Liquid glass' },
      { skin: 'custom', style: 'gradient', hue: 330, ru: 'Свой цвет', en: 'Your colour' },
      { skin: 'light', style: 'solid', ru: 'Светлый · однотонный', en: 'Light · solid' },
      { skin: 'dark', style: 'matte', ru: 'Матовое стекло', en: 'Frosted glass' }],
    [{ skin: 'light', style: 'gradient', wall: 'light', ru: 'Светлый', en: 'Light' },
      { skin: 'dark', style: 'solid', ru: 'Тёмный · однотонный', en: 'Dark · solid' },
      { skin: 'dark', style: 'glass', type: true, ru: 'Стекло на тёмном', en: 'Glass on dark' },
      { skin: 'custom', style: 'gradient', hue: 195, ru: 'Свой цвет', en: 'Your colour' },
      { skin: 'lime', style: 'solid', ru: 'Салатовый · однотонный', en: 'Lime · solid' },
      { skin: 'light', style: 'matte', wall: 'light', type: true, ru: 'Матовое · светлое', en: 'Frosted · light' }],
  ];
  const ROWSETS = [['folder', 'music', 'globe', 'code', 'game', 'chat'], ['mail', 'notes', 'calendar', 'chart', 'terminal', 'gear'],
    ['brush', 'camera', 'play', 'cube', 'music', 'game']];
  $$('[data-reel]').forEach((reel) => {
    const row = CARDS[+reel.dataset.reel];
    const html = row.map((c, i) => {
      const icons = ROWSETS[(i + +reel.dataset.reel) % 3];
      const s = 36, w =icons.length * s + (icons.length - 1) * s * 0.24 + s * 0.6, h = s * 1.42;
      return `<div class="cb-skin${c.wall === 'light' ? ' cb-skin--lightwall' : ''}">
        <div class="cb-wall"><i></i><i></i></div>${c.type ? '<div class="cb-skin__type">CUBI CUBI</div>' : ''}
        <div class="cb-island" data-skin="${c.skin}" data-style="${c.style}" style="--p:1;--w:${w}px;--h:${h}px;--r:${h * 0.36}px;--hue:${c.hue || 330}">
          <div class="cb-island__body"></div>
          <div class="cb-island__icons"><div class="cb-island__set">${icons.map((n) => `<img src="${ICON(n)}" alt="" loading="lazy">`).join('')}</div></div>
        </div>
        <span class="cb-skin__label" data-en="${c.en}">${c.ru}</span></div>`;
    }).join('');
    $('.cb-reel__track', reel).innerHTML = html + html;
  });

  /* ---------- Playground ---------- */
  const lab = $('[data-lab]');
  if (lab) {
    const el = $('[data-island]', lab);
    const isl = new Island(el);
    const hues = [330, 200, 25, 150, 270];
    let hue = 0;
    el.addEventListener('pointerenter', () => isl.open());
    el.addEventListener('pointerleave', () => isl.close());
    const replay = () => { isl.open(); setTimeout(() => isl.close(), 1500); };
    $$('.cb-seg', lab.parentElement).forEach((seg) => seg.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      $$('button', seg).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      const k = seg.dataset.opt, v = b.dataset.v;
      if (k === 'motion') { isl.motion = v; replay(); return; }
      if (k === 'skin' && v === 'custom') { el.style.setProperty('--hue', hues[hue++ % hues.length]); }
      el.dataset[k] = v;
      replay();
    }));
    $('[data-replay]', lab.parentElement).addEventListener('click', replay);
    new IntersectionObserver(([e], o) => { if (e.isIntersecting) { o.disconnect(); setTimeout(replay, 500); } }, { threshold: 0.6 }).observe(lab);
  }

  /* ---------- Counters (with decimals) ---------- */
  const nio = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    nio.unobserve(e.target);
    const el = e.target, end = parseFloat(el.dataset.num), dec = +(el.dataset.dec || 0);
    const t0 = performance.now(), dur = reduced ? 1 : 1600;
    (function tick(now) {
      const k = Math.min(1, (now - t0) / dur);
      el.textContent = (end * (1 - Math.pow(1 - k, 4))).toFixed(dec).replace('.', isEn() ? '.' : ',');
      if (k < 1) requestAnimationFrame(tick);
    })(t0);
  }), { threshold: 0.6 });
  $$('[data-num]').forEach((el) => nio.observe(el));

  /* ---------- Film: load YouTube only on click ---------- */
  $$('[data-yt]').forEach((b) => b.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${b.dataset.yt}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true;
    f.title = 'CUBI';
    b.replaceWith(f);
  }));
})();
