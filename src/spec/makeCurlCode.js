import {getBodyExample} from './getBodyExample';
import { getExtraHeaders } from './getExtraHeaders';
import { getHeadersWithExtras } from './getHeadersWithExtras';

export function makeCurlCode(spec, entry, path, method) {
  let url = `https://${spec.host}${path}`;

  const parameters = entry.parameters || []
  for (const variable of parameters) {
    if (variable.in === 'path') {
      const value = variable['x-example'] ? variable['x-example'] : '???';
      url = url.replace(`{${variable.name}}`, value);
    }
  }

  const headers = getHeadersWithExtras(parameters.filter(variable => variable.in === 'header'))
  const queryParams = (entry.parameters || [])
    .filter(x => x.in === 'query' && x['x-example'])
    .map(x => `${x.name}=${x['x-example']}`)
    .join('&');
  if (queryParams) {
    url += '?' + queryParams;
  }
  let code = `curl \\
  -X ${method.toUpperCase()} \\
  ${Object.entries(headers).map(([key, value]) => `-H "${key}: ${value}"`).join(` \\\n  `)} \\\n`;
  const body = getBodyExample(entry);
  if (body) {
    code += `  -d '${JSON.stringify(body).replace(/'/g, '\\\'')}' \\\n`;
  }
  code += `  "${url}"`;
  return code;
}
