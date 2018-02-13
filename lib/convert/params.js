module.exports = params => {
  const result = {};
  Object.keys(params).forEach(param => {
    const { type, description = '', options = [] } = params[param];
    const [, defaultValue] = description.match(/\(default: (.*)\)/) || [];

    switch (type) {
      case undefined:
        // { description: 'TODO: ?' }
        break;
      case 'enum':
        result[param] = options;
        break;
      case 'boolean':
        result[param] = '__flag__';
        break;
      case 'time':
      case 'string':
      case 'number':
        result[param] = defaultValue || '';
        break;
      case 'list':
        result[param] = [];
        break;
      default:
        throw new Error(`Unexpected type ${type}`);
    }
  });
  return result;
};
