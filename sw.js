// Replaces the old MemMaze service worker at /memmaze/sw.js. Browsers that cached
// the old app pick this up on their next update check; it clears the old app's
// caches, removes itself, and reloads open pages so they hit the redirect.
// Only caches for the /memmaze/ scope are deleted: Cache Storage is shared across
// the origin, and the new /memorun/ app's precache must survive.
self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys()
    await Promise.all(keys.filter((k) => k.includes('/memmaze/')).map((k) => caches.delete(k)))
    await self.registration.unregister()
    const windows = await self.clients.matchAll({ type: 'window' })
    for (const client of windows) client.navigate(client.url)
  })())
})
