const replacePattern = require('./replace_pattern')

module.exports = (parts) => {
  const result = {}
  Object.keys(parts).forEach(part => {
    const options = parts[part].options
    if (options && options.length) {
      result[replacePattern(part, { exact: true })] = options.sort()
    }
  })
  return result
}
