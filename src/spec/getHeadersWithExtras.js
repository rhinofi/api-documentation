import { getExtraHeaders } from './getExtraHeaders';

export function getHeadersWithExtras(extraHeaderParams) {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...getExtraHeaders(extraHeaderParams)
  }
}
