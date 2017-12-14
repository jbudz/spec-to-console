const map = require('./map_interpolation');

module.exports = (pattern, { brackets, exact } = {}) => {
  let newPattern = pattern;
  Object.keys(map).forEach(key => {
    const replaceFrom = brackets ? `{${key}}` : key;
    const replaceTo = brackets ? `{${map[key]}}` : map[key];
    if (exact) {
      const exactMatch = replaceFrom === newPattern;
      newPattern = exactMatch ? replaceTo : newPattern;
    } else {
      newPattern = newPattern.replace(replaceFrom, replaceTo);
    }
  });
  return newPattern;
};
