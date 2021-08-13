

// Extracts headers to be added in examples and code snippets
// In this case, we want to add authorization headers so example queries

import { getParamExample } from './getParamExample'

export function getExtraHeaders(headerParams = []) {
  const extraHeaders = {}
  headerParams.forEach(header => {
    ['authorization'].includes(header.name)
    extraHeaders[header.name] = getParamExample(header)
  })
  return extraHeaders
}
