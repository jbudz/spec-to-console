const convertParams = require('./convert_params')
const convertMethods = require('./convert_methods')
const convertPaths = require('./convert_paths')

module.exports = (spec) => {
  const result = {};
  Object.keys(spec).forEach(api => {
    const source = spec[api]
    const resultPath = source.url.path.replace(/^\//, '')

    result[resultPath] = {}
    if (source.url.params) {
      result[resultPath].url_params = convertParams(source.url.params)
    }

    if (source.methods) {
      result.methods = convertMethods(source.methods)
    }

    if (source.paths) {
      result.patterns = convertPaths(source.paths)
    }
  })

  return result;
}
