module.exports = (params) => {
  const result = {}
  Object.keys(params).forEach(param => {
    const source = params[param];
    switch(source.type) {
      case "enum":
        result[param] = source.options
        break;
      case "boolean":
        result[param] = "__flag__"
        break;
      case "time":
        result[param] = "30s"
        break;
      case "string":
        result[param] = ""
        break;
      case "list":
        result[param] = []
        break;
      default:
        throw new Error(`Unexpected type ${source.type}`)
    }
  })
  return result
}
