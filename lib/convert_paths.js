const map = require('./map_interpolation')

module.exports = (patterns) => {

  return patterns.map(pattern => {
    Object.keys(map).forEach(key => {
      pattern = pattern.replace(`{${key}}`, `{${map[key]}}`)
    })
    return pattern
  })
}
