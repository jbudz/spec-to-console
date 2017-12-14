const replacePattern = require('./replace_pattern');

module.exports = parts => {
  const result = {};
  Object.keys(parts).forEach(part => {
    const key = replacePattern(part, { exact: true });
    const options = parts[part].options;
    if (options && options.length) {
      result[key] = options.sort();
    } else {
      result[key] = null;
    }
  });
  return result;
};
