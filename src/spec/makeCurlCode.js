import {getBodyExample} from './getBodyExample';

export function makeCurlCode(spec, entry, path, method) {
  let url = `https://${spec.host}${path}`;
  for (const variable of (entry.parameters || [])) {
    if (variable.in === 'path') {
      const value = variable['x-example'] ? variable['x-example'] : '???';
      url = url.replace(`{${variable.name}}`, value);
    }
  }
  const queryParams = (entry.parameters || [])
    .filter(x => x.in === 'query' && x['x-example'])
    .map(x => `${x.name}=${x['x-example']}`)
    .join('&');
  if (queryParams) {
    url += '?' + queryParams;
  }
  let code = `curl \\
  -X ${method.toUpperCase()} \\
  -H "Accept: application/json" \\
  -H "Content-Type: application/json" \\\n`;
  const body = getBodyExample(entry);
  if (body) {
    code += `  -d '${JSON.stringify(body).replace(/'/g, '\\\'')}' \\\n`;
  }
  code += `  ${url}`;
  return code;
}
