self.addEventListener("install", e => {
    console.log("Service Worker installing."), e.waitUntil(caches.open("pwa-cache-v1").then(e => e.addAll(["/", "/index.html", "/styles.css", "/script.js"])))
}), self.addEventListener("fetch", e => {
    e.respondWith(caches.match(e.request).then(t => t || fetch(e.request)))
}), self.addEventListener("activate", e => {
    console.log("Service Worker activating.")
});