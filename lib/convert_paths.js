const map = require('./map_interpolation')

module.exports = (patterns) => {

  return patterns.map(pattern => {
    Object.keys(map).forEach(key => {
      pattern.replace(`{${key}}`, `{${value}}`)
    })
    return pattern
  })
}
