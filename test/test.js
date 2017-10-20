const test = require('ava')
const requireMaybe = require('..')

const FIXTURES = {
  local: {
    good: './fixtures/existing-module',
    fail: './fixtures/non-existing-module'
  },
  good: '@andreaspizsa/true',
  fail: 'somerandomnonexistingglobalmodulename' + Math.random()
}

test('installed: can require one existing installed module', t => {
  t.true(requireMaybe(FIXTURES.good))
})

test('installed: can return `undefined` for a non-existing module', t => {
  t.is(requireMaybe(FIXTURES.fail), undefined)
})

test('installed: can fallback to an existing module if one fails', t => {
  t.true(requireMaybe([FIXTURES.fail, FIXTURES.good]))
})

test('local: can require one existing module', t => {
  t.true(requireMaybe(FIXTURES.local.good))
})

test('local: can return `undefined` for a non-existing module', t => {
  t.is(requireMaybe(FIXTURES.local.fail), undefined)
})

test('local: can fallback to an existing module if one fails', t => {
  t.true(requireMaybe([FIXTURES.local.fail, FIXTURES.local.good]))
})
