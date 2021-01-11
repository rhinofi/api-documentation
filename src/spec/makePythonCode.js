import {getExampleFromSchema} from './getBodyExample';
import {getWsSubscribeParams} from './makeJsCode';

export function makePythonCode(spec, entry, path, method) {
  const queryLine = getQueryLine(entry.parameters);
  return (
    'import requests\n' +
    'import json\n' +
    '\n' +
    getHeaders() +
    getParams(entry.parameters) +
    getUrlLine(spec.host, path) +
    queryLine +
    '\n' +
    'response = requests.request(\n' +
    getMethod(method) +
    '    url,\n' +
    '    headers=headers,\n' +
    getBody(entry.parameters) +
    ')\n' +
    '\n' +
    'print(json.dumps(response.json(), indent=2))'
  );
}

export function makeWsPythonCode(spec, entry, path, method) {
  const url = `'wss://${spec.host}/${path}'`;
  const subParams = getWsSubscribeParams(entry.parameters, entry.operationId);
  return (
    `ws = websocket.WebSocketApp(${url})\n` +
    'ws.on_open = lambda self: self.send(\n' +
    subParams.map((p) => `  ${p.name}: ${p.value},\n`).join('') +
    ')\n' +
    'ws.on_message = lambda self, evt:  print (evt)'
  );
}

function getParams(parameters) {
  const variables = (parameters || [])
    .map(x => {
      if (x.in === 'path' || x.in === 'query') {
        const value = x['x-example'] ? JSON.stringify(x['x-example']) : '""';
        return `    "${x.name}": ${value},\n`;
      } else if (x.in === 'body') {
        const example = getExampleFromSchema(x.schema);
        return `    "${x.name}": ${JSON.stringify(JSON.stringify(example))},\n`;
      }
    })
    .filter(x => !!x);

  return variables.length > 0
    ? 'params = {\n' + variables.join('') + '}\n\n'
    : '';
}

function getUrlLine(host, path) {
  const pathWithParams = path.replace(/\{([^}]*)\}/g, '{params["$1"]}');
  return `url = "https://${host}${pathWithParams}"\n`;
}

function getQueryLine(parameters) {
  const queryParams = (parameters || [])
    .filter(x => x.in === 'query')
    .map(x => x.name + '={params["' + x.name + '"]}')
    .join('&');

  return queryParams
    ? `url += "?${queryParams}"\n`
    : '';
}

function getMethod(method) {
  return `    "${method.toUpperCase()}",\n`;
}

function getBody(parameters) {
  const param = (parameters || []).find(x => x.in === 'body');
  return param
    ? `    data=params["${param.name}"],\n`
    : '';
}

function getHeaders() {
  return (
    'headers = {\n' +
    '    "Accept": "application/json",\n' +
    '    "Content-Type": "application/json",\n' +
    '}\n\n'
  );
}
