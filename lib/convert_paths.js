const replacePattern = require('./replace_pattern');

module.exports = patterns => {
  return patterns.map(pattern => {
    return replacePattern(pattern, { brackets: true });
  });
};
