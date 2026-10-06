// MemMaze was renamed Memorun. This forwards every old /memmaze/ URL to the
// same place under /memorun/, keeping ?seed=…&group=… so shared levels still open.
export function toNewUrl(pathname, search, hash) {
  const match = pathname.match(/^\/memmaze(?:\/(.*))?$/)
  const rest = match ? (match[1] ?? '') : ''
  return '/memorun/' + rest + search + hash
}

if (typeof location !== 'undefined') {
  location.replace(toNewUrl(location.pathname, location.search, location.hash))
}
