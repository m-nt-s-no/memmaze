# memmaze → Memorun redirect

MemMaze was renamed **Memorun**. The game now lives at https://m-nt-s-no.github.io/memorun/ (source: https://github.com/m-nt-s-no/memorun).

This repo only exists to keep old `https://m-nt-s-no.github.io/memmaze/…` links working:
- `index.html` / `404.html` + `redirect.js`: forward any old path to `/memorun/`, keeping `?seed=…&group=…` and `#hash`.
- `sw.js`: retires the old app's service worker and its `/memmaze/` caches.

Keep this repo (and its Pages site) up indefinitely. Run `node --test` to test the URL mapping.
