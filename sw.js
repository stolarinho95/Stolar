// Questlog – service worker: działa offline, aktualizuje się przy internecie
const VERSION = "questlog-202610291353";
const SHELL = ["./", "index.html", "app.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "tesseract.min.js", "worker.min.js"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION && k !== "questlog-ocr" && k !== "questlog-fonts").map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  // czcionki Google: zapamiętaj na offline
  if (url.hostname.endsWith("googleapis.com") || url.hostname.endsWith("gstatic.com")) {
    e.respondWith(caches.open("questlog-fonts").then(async c => { const hit = await c.match(req); const net = fetch(req).then(r => { c.put(req, r.clone()); return r; }).catch(() => hit); return hit || net; }));
    return;
  }
  if (url.origin !== location.origin) return;
  // duże pliki OCR: z pamięci, pobierane raz
  if (url.pathname.endsWith(".wasm.js") || url.pathname.endsWith(".traineddata.gz")) {
    e.respondWith(caches.open("questlog-ocr").then(async c => { const hit = await c.match(req); if (hit) return hit; const r = await fetch(req); if (r.ok) c.put(req, r.clone()); return r; }));
    return;
  }
  // strona i skrypt: najpierw sieć (świeża wersja), bez sieci z pamięci
  if (req.mode === "navigate" || url.pathname.endsWith("/app.js") || url.pathname.endsWith("/index.html")) {
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); return r; }).catch(() => caches.match(req).then(h => h || caches.match("index.html"))));
    return;
  }
  e.respondWith(caches.match(req).then(h => h || fetch(req)));
});
