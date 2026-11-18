/* CUBI pages: niceties only. Everything works without this file (the downloads, the versions and their notes are
   plain HTML rendered by tools/build.py from versions.json).
   - live download counters (GitHub release download counts of every CUBI version, one request per visit, 5 min cache)
   - per-version counts on /software/cubi/versions/
   - «Copy» next to each SHA-256 (only on the visitor's click)
   Runs before main.js, so main.js still picks up the RU / EN texts it finds. */
(() => {
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isEn = () => document.documentElement.lang === 'en';
  const plural = (n, en) => {
    if (en) return n === 1 ? 'download' : 'downloads';
    const a = n % 10, b = n % 100;
    return a === 1 && b !== 11 ? 'скачивание' : a >= 2 && a <= 4 && (b < 12 || b > 14) ? 'скачивания' : 'скачиваний';
  };
  const fmt = (n) => n.toLocaleString('ru-RU');

  /* ---------- Download counts ---------- */
  const totalEls = $$('[data-dl]');
  const rows = $$('.cv[data-tag]');
  let perTag = null;

  const load = async () => {
    const KEY = 'cubi-releases';
    try {
      const c = JSON.parse(sessionStorage.getItem(KEY) || 'null');
      if (c && Date.now() - c.t < 5 * 60e3) return c.r;
    } catch (e) { /* storage blocked */ }
    const r = await fetch('https://api.github.com/repos/MalikMorser/downloads/releases?per_page=100', { headers: { Accept: 'application/vnd.github+json' } });
    if (!r.ok) throw new Error(r.status);
    const out = {};
    (await r.json()).filter((rel) => /^cubi-/.test(rel.tag_name)).forEach((rel) => {
      out[rel.tag_name] = rel.assets.filter((a) => /\.exe$/i.test(a.name)).reduce((s, a) => s + a.download_count, 0);
    });
    try { sessionStorage.setItem(KEY, JSON.stringify({ t: Date.now(), r: out })); } catch (e) { /* storage blocked */ }
    return out;
  };

  const countUp = (el, total) => {
    if (reduced) { el.textContent = fmt(total); return; }
    const t0 = performance.now(), dur = 1400;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = fmt(Math.round(total * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const showTotal = (total) => {
    $$('[data-dl-word]').forEach((el) => {
      el.dataset.ru = plural(total, false); el.dataset.en = plural(total, true);
      el.textContent = isEn() ? el.dataset.en : el.dataset.ru;
    });
    totalEls.forEach((el) => { el.hidden = false; });
    $$('[data-dl-num]').forEach((el) => countUp(el, total));
  };

  const showRows = () => {
    if (!perTag) return;
    rows.forEach((row) => {
      const n = perTag[row.dataset.tag] || 0;
      const el = row.querySelector('[data-cv-count]');
      if (!el || !n) return;
      el.textContent = `${fmt(n)} ${plural(n, isEn())}`;
      el.hidden = false;
    });
  };

  if (totalEls.length || rows.length) {
    // main.js (loaded after this file) captures the RU text of [data-en] elements, so update labels only after it ran.
    const start = () => load().then((t) => {
      perTag = t;
      const total = Object.values(t).reduce((s, n) => s + n, 0);
      if (total > 0 && totalEls.length) showTotal(total);
      showRows();
    }).catch(() => {});
    if (document.readyState === 'loading') addEventListener('DOMContentLoaded', () => setTimeout(start, 0)); else setTimeout(start, 0);
    $$('[data-lang]').forEach((b) => b.addEventListener('click', () => setTimeout(showRows, 0)));
  }

  /* ---------- Copy the SHA-256 ---------- */
  if (navigator.clipboard && window.isSecureContext) {
    $$('[data-copy]').forEach((b) => {
      b.hidden = false;
      b.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(b.dataset.copy);
        } catch (e) { return; }
        const label = b.querySelector('span');
        const keep = { ru: label.dataset.ru || label.innerHTML, en: label.dataset.en };
        label.textContent = isEn() ? 'Copied' : 'Скопировано';
        b.classList.add('is-done');
        clearTimeout(b._t);
        b._t = setTimeout(() => { label.innerHTML = isEn() ? keep.en : keep.ru; b.classList.remove('is-done'); }, 1600);
      });
    });
  }
})();
