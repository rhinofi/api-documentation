import {getExampleFromSchema} from './getBodyExample';

export function makeJsCode(spec, entry, path, method) {
  const queryLine = getQueryLine(entry.parameters);
  return (
    'async function makeRequest () {\n' +
    getParams(entry.parameters) +
    getUrlLine(queryLine, spec.host, path) +
    queryLine +
    '  const response = await fetch(url, {\n' +
    getMethod(method) +
    getBody(entry.parameters) +
    getHeaders() +
    '  });\n' +
    '  return response.json();\n' +
    '}'
  );
}

export function makeWsJsCode(spec, entry, path) {
  const queryLine = getQueryLine(entry.parameters);
  const subParams = getWsSubscribeParams(entry.parameters, entry.operationId);
  return (
    'const WebSocket = require(\'ws\')\n' +
    'function subscribe () {\n' +
    getParams(entry.parameters) +
    getUrlLine(queryLine, spec.host, path) +
    queryLine +
    `  const ws = new WebSocket(url)\n` +
    `  ws.on('message', (msg) => console.log(msg))\n` +
    '\n' +
    '  const subscribeMsg = JSON.stringify({\n' +
    `${subParams.map((p) => `    ${p.name}: ${p.value}`).join(',\n')}\n` +
    '  }) \n' +
    '\n' +
    `  ws.on('open', () => ws.send(subscribeMsg))\n` +
    '}'
  );
}

function getParams(parameters) {
  const variables = (parameters || [])
    .map(x => {
      if (x.in === 'path' || x.in === 'query') {
        const value = x['x-example'] ? JSON.stringify(x['x-example']) : '""';
        return `    ${x.name}: ${value},\n`;
      } else if (x.in === 'body') {
        const example = getExampleFromSchema(x.schema);
        if (!example) return '';
        const exampleCode = JSON.stringify(example, null, 2)
          .split('\n')
          .map((x, i) => i !== 0 ? '    ' + x : x)
          .join('\n');
        return `    ${x.name}: ${exampleCode},\n`;
      }
    })
    .filter(x => !!x);

  return variables.length > 0
    ? '  const params = {\n' + variables.join('') + '  };\n'
    : '';
}

function getUrlLine(queryLine, host, path) {
  const pathWithParams = path.replace(/\{([^}]*)\}/g, '${params.$1}');
  const keyword = queryLine ? 'let' : 'const';
  return `  ${keyword} url = \`https://${host}${pathWithParams}\`;\n`;
}

function getQueryLine(parameters) {
  const queryParams = (parameters || [])
    .filter(x => x.in === 'query')
    .map(x => x.name + '=${params.' + x.name + '}')
    .join('&');

  return queryParams
    ? `  url += \`?${queryParams}\`;\n`
    : '';
}

function getMethod(method) {
  return (
    `    method: "${method.toUpperCase()}",\n`
  );
}

function getBody(parameters) {
  const param = (parameters || []).find(x => x.in === 'body');
  return param
    ? `    body: JSON.stringify(params.${param.name}),\n`
    : '';
}

export function getWsSubscribeParams(parameters, operationId) {
  const param = (parameters || []).filter(x => x.in === 'subscribeMsg');
  const channel = (param.find(x => x.name === 'channel') || {})['x-example'];
  const subParams = [
    {name: '"event"', value: '"subscribe"'},
    {name: '"channel"', value: `"${channel}"`},
  ];
  const symbol = (param.find(x => x.name === 'symbol') || {})['x-example'];

  switch (operationId) {
    case 'WsCandles':
      const type = (param.find(x => x.name === 'type') || {})['x-example'];
      const timeInterval = (param.find(x => x.name === 'timeframe') || {})['x-example'];
      subParams.push({name: '"key"', value: `"${type}:${timeInterval}:${symbol}"`});
      break;
    case 'WsBook':
      subParams.push({name: '"symbol"', value: `"${symbol}"`});
      break;
    case 'WsTicker':
      subParams.push({name: '"symbol"', value: `"${symbol}"`});
      break;
    default:
      throw new Error('Unknown ws operation');
  }

  return subParams;
}

function getHeaders() {
  return (
    '    headers: {\n' +
    '      "Accept": "application/json",\n' +
    '      "Content-Type": "application/json",\n' +
    '    },\n'
  );
}
