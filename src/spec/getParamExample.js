
export function getParamExample(queryParam = {}) {
  if (queryParam.hasOwnProperty('example')) {
    return queryParam['example']
  }
  if (queryParam.hasOwnProperty('x-example')) {
    return queryParam['x-example']
  }
  if (queryParam.hasOwnProperty('default')) {
    return queryParam.default
  }
  if (queryParam.enum && queryParam.enum.length > 0) {
    return queryParam.enum[0]
  }
}