
export function getParamExample(params = {}) {
  if (params.hasOwnProperty('example')) {
    return params['example']
  }
  if (params.hasOwnProperty('x-example')) {
    return params['x-example']
  }
  if (params.hasOwnProperty('default')) {
    return params.default
  }
  if (params.enum && params.enum.length > 0) {
    return params.enum[0]
  }
}
