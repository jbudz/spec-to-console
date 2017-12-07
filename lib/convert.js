const convertParams = require('./convert_params')

module.exports = (spec) => {
  const result = {};
  Object.keys(spec).forEach(api => {
    const source = spec[api]
    const resultPath = source.url.path.replace(/^\//, '')

    result[resultPath] = {}
    if (source.url.params) {
      result[resultPath].url_params = convertParams(source.url.params)
    }
  })

  return result;
}
