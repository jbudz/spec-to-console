const convertParams = require('./convert/params');
const convertMethods = require('./convert/methods');
const convertPaths = require('./convert/paths');
const convertParts = require('./convert/parts');

module.exports = spec => {
  const result = {};
  Object.keys(spec).forEach(api => {
    const source = spec[api];
    result[api] = {};
    if (source.url.params) {
      const urlParams = convertParams(source.url.params);
      if (Object.keys(urlParams).length > 0) {
        result[api].url_params = urlParams;
      }
    }

    if (source.methods) {
      result[api].methods = convertMethods(source.methods);
    }

    if (source.url.paths) {
      result[api].patterns = convertPaths(source.url.paths);
    }

    if (source.documentation) {
      result[api].documentation = source.documentation;
    }

    if (source.url.parts) {
      const components = convertParts(source.url.parts);
      const hasComponents =
        Object.keys(components).filter(c => {
          return Boolean(components[c]);
        }).length > 0;

      if (hasComponents) {
        result[api].url_components = convertParts(source.url.parts);
      }
    }
  });

  return result;
};
