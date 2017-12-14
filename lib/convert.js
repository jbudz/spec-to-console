const convertParams = require('./convert_params')
const convertMethods = require('./convert_methods')
const convertPaths = require('./convert_paths')
const convertParts = require('./convert_parts')

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

    if (source.url.paths) {
      result.patterns = convertPaths(source.url.paths)
    }

    if (source.url.parts) {
      result.url_components = convertParts(source.url.parts)
    }
  })

  return result;
}
