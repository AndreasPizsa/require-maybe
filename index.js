const path = require('path')

module.exports = requireMaybe

function ensureArray(arrayOrValue) {
  return Array.isArray(arrayOrValue) ? arrayOrValue : [arrayOrValue]
}

// return the first match result that matches an element
function arrayFirstMatch(array, matchFn) {
  let result
  array.find(element => {
    result = matchFn(element)
    return result !== undefined && result !== null
  })
  return result
}

function requireMaybe(names) {
  names = ensureArray(names)
  const dir = path.dirname(require('callsite')()[1].getFileName())

  return arrayFirstMatch(names, name => {
    if (name[0] === '.') {
      name = path.resolve(dir, name)
    }

    try {
      return require(name)
    } catch (err) {
      /* istanbul ignore next */
      if (err.code !== 'MODULE_NOT_FOUND') throw err
    }
  })
}
