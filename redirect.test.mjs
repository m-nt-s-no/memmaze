import { test } from 'node:test'
import assert from 'node:assert/strict'
import { toNewUrl } from './redirect.js'

test('root with trailing slash goes to /memorun/', () => {
  assert.equal(toNewUrl('/memmaze/', '', ''), '/memorun/')
})

test('root without trailing slash goes to /memorun/', () => {
  assert.equal(toNewUrl('/memmaze', '', ''), '/memorun/')
})

test('shared level link keeps seed and group', () => {
  assert.equal(
    toNewUrl('/memmaze/', '?seed=v1-abc123&group=grp1', ''),
    '/memorun/?seed=v1-abc123&group=grp1',
  )
})

test('hash is kept', () => {
  assert.equal(toNewUrl('/memmaze/', '?seed=x', '#top'), '/memorun/?seed=x#top')
})

test('deep path is kept', () => {
  assert.equal(toNewUrl('/memmaze/og-image.png', '', ''), '/memorun/og-image.png')
})

test('a path that merely starts with "memmaze" is not mangled', () => {
  assert.equal(toNewUrl('/memmazes/x', '', ''), '/memorun/')
})

test('unexpected path falls back to /memorun/ with query kept', () => {
  assert.equal(toNewUrl('/other/page', '?seed=x', ''), '/memorun/?seed=x')
})
