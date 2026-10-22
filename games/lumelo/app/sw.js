const CACHE = 'lumelo-1.3.0-b17d48821b';
const FILES = ["./", "app.js", "arrangement.js", "assets/icon-1024.png", "assets/icon-180.png", "assets/icon-192.png", "assets/icon-512.png", "assets/icon-64.png", "audio-graph.js", "audio.js", "clear-confirmation.js", "composition.js", "editor.css", "effects-audio.js", "effects-dsp.js", "effects-fallback.js", "effects-worklet.js", "export-music.js", "files.css", "help.css", "help.js", "index.html", "instrument-banks.js", "manifest.webmanifest", "mobile.css", "music-grid.js", "music-styles.js", "musical-view.js", "note-edit.js", "note-editor.js", "pitch-scale.js", "pixel-grid.js", "platform-files.js", "playback-visuals.js", "project-store.js", "project.js", "reference-audio.js", "reference-dsp.js", "reference-score.js", "reference-worklet.js", "rhythm-audio.js", "rhythm-score.js", "rhythm.css", "rhythms.js", "scratch-dsp.js", "settings.js", "stroke-geometry.js", "studio-controls.js", "studio.css", "style.css", "synth-voice.js", "theme.css", "theme.js", "tonality.js", "voice-plan.js", "workspace.css"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request)));
});
