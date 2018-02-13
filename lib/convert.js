const convertParams = require('./convert/params');
const convertMethods = require('./convert/methods');
const convertPaths = require('./convert/paths');
const convertParts = require('./convert/parts');

module.exports = spec => {
  const result = {};
  Object.keys(spec).forEach(api => {
    const source = spec[api];
    const resultPath = source.url.path.replace(/^\//, '');

    result[resultPath] = {};
    if (source.url.params) {
      const urlParams = convertParams(source.url.params)
      if (Object.keys(urlParams).length > 0) {
        result[resultPath].url_params = urlParams;
      }
    }

    if (source.methods) {
      result[resultPath].methods = convertMethods(source.methods);
    }

    if (source.url.paths) {
      result[resultPath].patterns = convertPaths(source.url.paths);
    }

    if (source.url.parts) {
      const components = convertParts(source.url.parts);
      const hasComponents = Object.keys(components).filter(c => {
        return Boolean(components[c])
      }).length > 0
      if (hasComponents) {
        result[resultPath].url_components = convertParts(source.url.parts);
      }
    }
  });

  return result;
};
