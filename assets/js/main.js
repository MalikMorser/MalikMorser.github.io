(function () {
  const doc = document.documentElement;
  const body = document.body;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } },
    sget(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    sset(k, v) { try { sessionStorage.setItem(k, v); } catch (e) { /* storage blocked */ } },
  };

  /* ---------- Language ---------- */

  const i18nEls = $$('[data-en]');
  i18nEls.forEach((el) => { el.dataset.ru = el.innerHTML; });
  const i18nAttr = $$('[data-en-label]');
  i18nAttr.forEach((el) => { el.dataset.ruLabel = el.getAttribute('aria-label') || ''; });

  function setLang(lang) {
    doc.lang = lang;
    i18nEls.forEach((el) => { el.innerHTML = lang === 'en' ? el.dataset.en : el.dataset.ru; });
    i18nAttr.forEach((el) => el.setAttribute('aria-label', lang === 'en' ? el.dataset.enLabel : el.dataset.ruLabel));
    $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    store.set('lang', lang);
    splitManifesto();
    updateManifesto();
    refreshSheet();
    renderDl();
  }
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ---------- Manifesto word lighting ---------- */

  const manifesto = $('.manifesto');
  let words = [];
  function splitManifesto() {
    if (!manifesto) return;
    const out = [];
    const wrap = (text, hl) => text.split(/(\s+)/).map((t) => {
      if (!t.trim()) return t;
      return `<span class="w${hl ? ' hl' : ''}">${t}</span>`;
    }).join('');
    manifesto.childNodes.forEach((n) => {
      if (n.nodeType === 3) out.push(wrap(n.textContent, false));
      else if (n.classList && n.classList.contains('hl')) out.push(wrap(n.textContent, true));
      else if (n.classList && n.classList.contains('w')) out.push(n.outerHTML);
      else out.push(n.outerHTML || '');
    });
    manifesto.innerHTML = out.join('');
    words = $$('.w', manifesto);
  }
  function updateManifesto() {
    if (!manifesto || !words.length) return;
    const r = manifesto.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.35)));
    const lit = Math.round(p * words.length);
    words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
  }

  /* ---------- Preloader ---------- */

  const pre = $('.preloader');
  const seen = store.sget('seen');
  let isReady = false;
  function ready() {
    if (isReady) return;
    isReady = true;
    body.classList.remove('is-loading');
    doc.classList.add('is-ready');
    if (pre) pre.classList.add('is-done');
    setTimeout(() => pre && pre.remove(), 1300);
    store.sset('seen', '1');
  }
  if (!pre || reduced || seen) {
    if (pre) pre.style.display = 'none';
    setTimeout(ready, 30);
  } else {
    // rAF stalls in background tabs; never leave the page hidden behind the loader.
    setTimeout(ready, 3000);
    const count = $('.preloader__count');
    const bar = $('.preloader__bar i');
    const t0 = performance.now();
    const dur = 1500;
    (function tick(now) {
      const k = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      count.textContent = String(Math.round(e * 100)).padStart(3, '0');
      bar.style.transform = `scaleX(${e})`;
      if (k < 1) requestAnimationFrame(tick);
      else setTimeout(ready, 180);
    })(t0);
  }

  /* ---------- Smooth scroll ---------- */

  let lenis = null;
  if (window.Lenis && !reduced) {
    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 0.95 });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  function scrollToTarget(target) {
    if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.6 });
    else (typeof target === 'number' ? window.scrollTo({ top: target, behavior: 'smooth' }) : target.scrollIntoView({ behavior: 'smooth' }));
  }
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const t = $(id);
      if (!t) return;
      e.preventDefault();
      body.classList.remove('menu-open');
      lenis && lenis.start();
      scrollToTarget(t);
    });
  });
  $$('[data-top]').forEach((b) => b.addEventListener('click', (e) => { e.preventDefault(); scrollToTarget(0); }));

  /* ---------- Menu ---------- */

  const burger = $('.burger');
  burger && burger.addEventListener('click', () => {
    const open = !body.classList.contains('menu-open');
    body.classList.toggle('menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    if (lenis) open ? lenis.stop() : lenis.start();
  });

  /* ---------- Nav state, progress, active section ---------- */

  const nav = $('.nav');
  const progress = $('.progress');
  // Scroll-spy only applies to in-page anchors; page links are marked with aria-current by tools/build.py.
  const links = $$('.nav__link').filter((l) => (l.getAttribute('href') || '').startsWith('#'));
  const sections = links.map((l) => $(l.getAttribute('href'))).filter(Boolean);
  let lastY = window.scrollY;

  /* ---------- Marquee ---------- */

  const track = $('.marquee__track');
  let mqX = 0;
  let mqVel = 0;
  let groupW = 0;
  function measureMarquee() { groupW = track ? track.firstElementChild.getBoundingClientRect().width : 0; }
  measureMarquee();
  window.addEventListener('resize', measureMarquee);

  function onScroll() {
    const y = window.scrollY;
    const max = doc.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle('is-scrolled', y > 20);
    const goingDown = y > lastY;
    nav.classList.toggle('is-hidden', goingDown && y > window.innerHeight * 0.9 && !body.classList.contains('menu-open'));
    mqVel += (y - lastY) * 0.06;
    lastY = y;

    let current = null;
    sections.forEach((s) => { if (s.getBoundingClientRect().top < window.innerHeight * 0.45) current = s; });
    links.forEach((l) => l.classList.toggle('is-active', current && l.getAttribute('href') === '#' + current.id));
    updateManifesto();
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  (function marqueeLoop() {
    if (track && groupW) {
      mqVel *= 0.92;
      mqX -= reduced ? 0 : 0.6 + Math.abs(mqVel);
      if (mqX <= -groupW) mqX += groupW;
      track.style.transform = `translate3d(${mqX}px,0,0)`;
    }
    requestAnimationFrame(marqueeLoop);
  })();

  /* ---------- Reveal on scroll ---------- */

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
  $$('[data-reveal]').forEach((el) => io.observe(el));

  /* ---------- Counters ---------- */

  const cio = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      cio.unobserve(en.target);
      const el = en.target;
      const end = parseFloat(el.dataset.count);
      const t0 = performance.now();
      const dur = reduced ? 1 : 1600;
      (function tick(now) {
        const k = Math.min(1, (now - t0) / dur);
        el.firstChild.nodeValue = String(Math.round(end * (1 - Math.pow(1 - k, 4))));
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  $$('[data-count]').forEach((el) => cio.observe(el));

  /* ---------- Clock (Dushanbe) ---------- */

  const clock = $$('[data-clock]');
  function updateClock() {
    const s = new Date().toLocaleTimeString('ru-RU', { timeZone: 'Asia/Dushanbe', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    clock.forEach((c) => { c.textContent = s; });
  }
  if (clock.length) { updateClock(); setInterval(updateClock, 1000); }

  /* ---------- Card spotlight ---------- */

  $$('.card').forEach((c) => {
    c.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--mx', `${e.clientX - r.left}px`);
      c.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });

  /* ---------- Cursor + magnetic ---------- */

  if (fine && !reduced) {
    $$('[data-magnetic]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const b = el.getBoundingClientRect();
        const x = (e.clientX - b.left - b.width / 2) * 0.25;
        const y = (e.clientY - b.top - b.height / 2) * 0.35;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.transition = 'transform .7s cubic-bezier(.22,1,.36,1)';
        el.style.transform = '';
        setTimeout(() => { el.style.transition = ''; }, 700);
      });
    });

    // Gentle parallax on media that asks for it
    const par = $$('[data-parallax]');
    (function parallax() {
      const vh = window.innerHeight;
      par.forEach((el) => {
        const b = el.getBoundingClientRect();
        if (b.bottom < 0 || b.top > vh) return;
        const k = ((b.top + b.height / 2) - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(k * parseFloat(el.dataset.parallax || 40)).toFixed(1)}px, 0)`;
      });
      requestAnimationFrame(parallax);
    })();
  }

  /* ---------- Lightbox (images + YouTube) ---------- */

  const lb = $('.lightbox');
  const lbBody = $('.lightbox__body');
  const lbCap = $('.lightbox__cap');
  function openLightbox(html, cap) {
    lbBody.innerHTML = html;
    lbCap.textContent = cap || '';
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    lenis && lenis.stop();
    $('.lightbox__close').focus({ preventScroll: true });
  }
  function closeLightbox() {
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    if (lenis && !sheetId) lenis.start();
    setTimeout(() => { lbBody.innerHTML = ''; }, 500);
  }
  document.addEventListener('click', (e) => {
    const z = e.target.closest('[data-zoom]');
    if (z) {
      e.preventDefault();
      const cap = z.dataset.caption || '';
      openLightbox(`<img src="${z.dataset.zoom}" alt="${cap.replace(/"/g, '&quot;')}">`, cap);
      return;
    }
    const v = e.target.closest('[data-youtube]');
    if (v) {
      e.preventDefault();
      const id = v.dataset.youtube;
      openLightbox(`<div class="lightbox__video"><iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1" title="YouTube video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>`, v.dataset.caption);
    }
  });
  lb && lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('.lightbox__close')) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lb.classList.contains('is-open')) { closeLightbox(); if (sheetId) lenis && lenis.stop(); return; }
      if (sheetId) { closeSheet(); return; }
      if (body.classList.contains('menu-open')) burger.click();
    }
  });

  /* ---------- Live download counters: GitHub release download counts ---------- */
  // <p class="dlcount" data-dl-count="lumelo-" hidden></p> shows the downloads of every release
  // whose tag starts with that prefix. One request per visit, cached for 5 minutes.

  let dlData = null;
  let dlWait = null;
  function dlLoad() {
    if (!dlWait) {
      dlWait = (async () => {
        try { const c = JSON.parse(store.sget('dl-counts') || 'null'); if (c && Date.now() - c.t < 5 * 60e3) return c.r; } catch (e) { /* bad cache */ }
        const r = await fetch('https://api.github.com/repos/MalikMorser/downloads/releases?per_page=100', { headers: { Accept: 'application/vnd.github+json' } });
        if (!r.ok) throw new Error(r.status);
        const rel = (await r.json()).map((x) => [x.tag_name, x.assets.reduce((n, a) => n + a.download_count, 0)]);
        store.sset('dl-counts', JSON.stringify({ t: Date.now(), r: rel }));
        return rel;
      })().then((r) => { dlData = r; return r; });
    }
    return dlWait;
  }
  function dlWord(n, lang) {
    if (lang === 'en') return n === 1 ? 'download' : 'downloads';
    const a = n % 10, b = n % 100;
    return a === 1 && b !== 11 ? 'скачивание' : a >= 2 && a <= 4 && (b < 12 || b > 14) ? 'скачивания' : 'скачиваний';
  }
  function renderDl(root = document) {
    if (!dlData) return;
    const lang = doc.lang === 'en' ? 'en' : 'ru';
    $$('[data-dl-count]', root).forEach((el) => {
      const n = dlData.filter(([t]) => t.startsWith(el.dataset.dlCount)).reduce((s, [, c]) => s + c, 0);
      if (!n) return;
      el.innerHTML = `<i aria-hidden="true"></i><b>${n.toLocaleString('ru-RU')}</b> ${dlWord(n, lang)}`;
      el.hidden = false;
    });
  }
  if ($('[data-dl-count]')) dlLoad().then(() => renderDl()).catch(() => {});

  /* ---------- Detail sheet (cards grow into a full panel) ---------- */

  const sheet = $('.sheet');
  const panel = $('.sheet__panel');
  const sheetBody = $('.sheet__content');
  const ICONS = {
    download: '<path d="M12 4v11m-5-5 5 5 5-5M5 20h14"/>',
    heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    github: '<path d="M9 19c-4 1.4-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6.2 0C6.6 2.3 5.6 2.6 5.6 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.2 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    youtube: '<path d="M7 4.5v15l13-7.5z"/>',
    site: '<path d="M7 17 17 7M8 7h9v9"/>',
    tg: '<path d="m21 4-18 7.5 6.5 2L12 20l3-5 5 4z"/>',
  };
  let sheetId = null;
  let sheetOrigin = null;

  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

  function renderSheet() {
    const d = window.DETAILS && window.DETAILS[sheetId];
    if (!d) return;
    const lang = doc.lang === 'en' ? 'en' : 'ru';
    const t = d[lang];
    panel.style.setProperty('--c', d.accent || 'var(--accent)');

    let hero;
    if (d.image) {
      const play = d.video ? '<span class="work__play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.5v15l13-7.5z"/></svg></span>' : '';
      // Videos open on YouTube itself, not in an embedded player.
      hero = d.video
        ? `<a class="dt__hero" href="https://youtu.be/${d.video}" target="_blank" rel="noopener" data-cursor="YOUTUBE"><img src="${d.image}" alt="${esc(d.name)}">${play}</a>`
        : `<button type="button" class="dt__hero" data-zoom="${d.image}" data-caption="${esc(d.name)}" data-cursor="VIEW"><img src="${d.image}" alt="${esc(d.name)}"></button>`;
    } else {
      const keys = d.keys ? `<div class="keys">${d.keys.map((k) => `<kbd>${k}</kbd>`).join('')}</div>` : '<span></span>';
      hero = `<div class="dt__hero"><div class="dt__poster"><span class="mono"><span>${esc(t.kind)}</span><span>v${esc(d.version)}</span></span><b>${esc(d.name)}</b>${keys}</div></div>`;
    }
    const thumbs = d.gallery
      ? `<div class="dt__thumbs">${d.gallery.map((g) => `<button type="button" data-zoom="${g}" data-caption="${esc(d.name)}" data-cursor="VIEW"><img src="${g}" alt="" loading="lazy"></button>`).join('')}</div>`
      : '';
    const meta = `<dl class="dt__meta">${t.meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
    const feats = `<h3 class="dt__h">${lang === 'en' ? 'Features' : 'Возможности'}</h3><ul class="dt__features">${t.features.map(([b, s]) => `<li><b>${esc(b)}</b>${esc(s)}</li>`).join('')}</ul>`;
    // Optional extra sections: [title, items, ordered?] — e.g. release notes and update steps.
    const blocks = (t.blocks || []).map(([title, items, ordered]) => `<h3 class="dt__h">${esc(title)}</h3><${ordered ? 'ol class="dt__steps"' : 'ul class="dt__news"'}>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`).join('');
    const steps = t.steps ? `<h3 class="dt__h">${esc(t.stepsTitle)}</h3><ol class="dt__steps">${t.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>` : '';
    const actions = (d.links || []).map((l) => {
      const ext = /^https?:/.test(l.href) && l.icon !== 'download' ? ' target="_blank" rel="noopener"' : '';
      const fill = l.icon === 'youtube' ? 'currentColor' : 'none';
      return `<a class="btn ${l.primary ? 'btn--primary' : 'btn--ghost'}" href="${l.href}"${ext}><svg viewBox="0 0 24 24" fill="${fill}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[l.icon] || ICONS.site}</svg><span>${esc(l[lang])}</span></a>`;
    }).join('');
    // Optional per-product extras: a disabled "not yet" button, a fine-print note and the archive checksum.
    const soon = t.soon ? `<span class="btn btn--disabled" aria-disabled="true">${esc(t.soon)}</span>` : '';
    const notes = [];
    if (d.pro) notes.push(lang === 'en' ? 'Paid · pay on Boosty, the archive opens right after purchase' : 'Платно · оплата на Boosty, архив откроется сразу после покупки');
    if (t.note) notes.push(t.note);
    if (d.sha) notes.push('SHA-256 ' + d.sha);
    const note = notes.map((n) => `<p class="dt__note mono">${esc(n)}</p>`).join('');

    sheetBody.innerHTML = `
      <div class="dt">
        <div class="dt__visual">${hero}${thumbs}</div>
        <div class="dt__info">
          <div class="dt__kind"><span class="chip"><i></i>${esc(t.status)}</span><span class="chip">${esc(t.kind)}</span></div>
          <h2 class="dt__name" id="sheet-title">${esc(d.name)}<sup>${esc(d.version)}</sup></h2>
          <p class="dt__short">${esc(t.short)}</p>
          <div class="dt__desc">${t.desc.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
          ${meta}${blocks}${feats}${steps}
          <div class="dt__actions">${soon}${actions}</div>${d.dl ? `<p class="dlcount" data-dl-count="${esc(d.dl)}" hidden></p>` : ''}${note}
        </div>
      </div>`;
    if (d.dl) dlLoad().then(() => renderDl(sheetBody)).catch(() => {});
  }
  function refreshSheet() { if (sheetId) renderSheet(); }

  function flipFrom(el) {
    if (!el || reduced) return;
    const to = panel.getBoundingClientRect();
    const from = el.getBoundingClientRect();
    panel.classList.remove('is-animating');
    panel.style.transform = `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`;
    panel.style.opacity = '0.35';
    void panel.offsetWidth;
    panel.classList.add('is-animating');
    panel.style.transform = '';
    panel.style.opacity = '';
  }

  function openSheet(id, origin) {
    if (!window.DETAILS || !window.DETAILS[id]) return;
    sheetId = id;
    sheetOrigin = origin;
    renderSheet();
    sheetBody.classList.remove('is-shown');
    sheet.classList.add('is-open');
    sheet.setAttribute('aria-hidden', 'false');
    panel.scrollTop = 0;
    lenis && lenis.stop();
    flipFrom(origin);
    requestAnimationFrame(() => sheetBody.classList.add('is-shown'));
    setTimeout(() => sheetBody.classList.add('is-shown'), 60);
    $('.sheet__close').focus({ preventScroll: true });
  }

  function closeSheet() {
    if (!sheetId) return;
    sheetBody.classList.remove('is-shown');
    const origin = sheetOrigin;
    if (origin && !reduced && origin.getBoundingClientRect().bottom > 0) {
      const to = panel.getBoundingClientRect();
      const from = origin.getBoundingClientRect();
      panel.classList.add('is-animating');
      panel.style.transform = `translate(${from.left - to.left}px, ${from.top - to.top}px) scale(${from.width / to.width}, ${from.height / to.height})`;
      panel.style.opacity = '0';
    }
    sheet.classList.remove('is-open');
    sheet.setAttribute('aria-hidden', 'true');
    lenis && lenis.start();
    const id = sheetId;
    sheetId = null;
    setTimeout(() => {
      if (sheetId) return;
      panel.classList.remove('is-animating');
      panel.style.transform = '';
      panel.style.opacity = '';
      sheetBody.innerHTML = '';
    }, 650);
    if (origin && origin.focus) origin.focus({ preventScroll: true });
    return id;
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-detail]');
    if (!trigger) return;
    const link = e.target.closest('a');
    if (link && trigger.contains(link)) return; // inner download/site links keep working
    e.preventDefault();
    openSheet(trigger.dataset.detail, trigger.closest('.card, .stage__main') || trigger);
  });
  document.addEventListener('keydown', (e) => {
    const t = e.target.closest && e.target.closest('[data-detail][role="button"]');
    if (t && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openSheet(t.dataset.detail, t); }
  });
  sheet && sheet.addEventListener('click', (e) => {
    if (e.target.closest('.sheet__close') || e.target.classList.contains('sheet__backdrop')) closeSheet();
  });

  /* ---------- Category tabs (inner pages) ---------- */

  const tabs = $$('.tab[data-tab]');
  function showTab(name, scroll) {
    if (!tabs.some((t) => t.dataset.tab === name)) return;
    tabs.forEach((t) => t.setAttribute('aria-selected', String(t.dataset.tab === name)));
    $$('.cat[data-cat]').forEach((c) => { c.hidden = c.dataset.cat !== name; });
    $$('.cat[data-cat]:not([hidden]) [data-reveal]').forEach((el) => el.classList.add('is-in'));
    if (scroll) {
      const bar = $('.tabs');
      scrollToTarget(bar.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(doc).getPropertyValue('--nav-h')) || 76) + 1);
      history.replaceState(null, '', '#' + name);
    }
  }
  tabs.forEach((t) => t.addEventListener('click', () => showTab(t.dataset.tab, true)));
  if (tabs.length) showTab(tabs.some((t) => '#' + t.dataset.tab === location.hash) ? location.hash.slice(1) : tabs[0].dataset.tab, false);

  /* ---------- Gallery filter ---------- */

  $$('[data-filter]').forEach((b) => {
    b.addEventListener('click', () => {
      const f = b.dataset.filter;
      $$('[data-filter]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      $$('.art').forEach((a) => {
        const show = f === 'all' || a.dataset.cat.split(' ').includes(f);
        a.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------- Year ---------- */
  $$('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });

  /* ---------- Boot ---------- */

  doc.classList.add('js');
  const saved = store.get('lang');
  const initial = saved || ((navigator.language || 'ru').toLowerCase().startsWith('ru') ? 'ru' : 'en');
  if (initial === 'en') setLang('en');
  else { splitManifesto(); $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === 'ru'))); }
  onScroll();
})();
