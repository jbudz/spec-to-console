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
      result[resultPath].url_params = convertParams(source.url.params);
    }

    if (source.methods) {
      result.methods = convertMethods(source.methods);
    }

    if (source.url.paths) {
      result.patterns = convertPaths(source.url.paths);
    }

    if (source.url.parts) {
      const components = convertParts(source.url.parts);
      const hasComponents = Object.keys(components).filter(c => {
        return Boolean(components[c])
      }).length > 0
      if (hasComponents) {
        result.url_components = convertParts(source.url.parts);
      }
    }
  });

  return result;
};
