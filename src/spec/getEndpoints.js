import {forEachEndpoint} from './forEachEndpoint';
import {getBodyExample} from './getBodyExample';
import {makeJsCode, makeWsJsCode} from './makeJsCode';
import {makePythonCode, makeWsPythonCode} from './makePythonCode';
import {makeCppCode, makeWsCppCode} from './mapeCppCode';
import {makeCurlCode} from './makeCurlCode';

export function getEndpoints(spec) {
  const endpoints = [];
  forEachEndpoint(spec, (entry, orgPath, method) => {
    // workaround for unique ws socket endpoint
    const path = orgPath.replace(/{ws-uid-\d+}/g, '');

    const responses = getResponses(entry);
    const calls = getCalls(spec, entry, path, method);
    const curl = makeCurlCode(spec, entry, path, method);
    const parameters = getParameters(entry);
    const body = getBodyExample(entry);
    const responsesDetails = getResponsesDetails(entry);
    const protocol = method === 'ws' ? 'wss' : 'https';
    endpoints.push({
      method: method.toUpperCase(),
      title: entry.title,
      name: entry.operationId,
      link: '#' + entry.operationId,
      path: `${protocol}://${spec.host}${path}`,
      description: entry.summary, // TODO: markdown?
      calls,
      curl,
      responses,
      parameters,
      body: body ? JSON.stringify(body, null, 4) : undefined,
      responsesDetails,
    });
  });
  return endpoints;
}

function getParameters(entry) {
  if (!entry.parameters) return;
  return entry.parameters.filter(parameter => parameter.in !== 'body');
}

function getCalls(spec, entry, path, method) {
  return [
    {
      language: 'js',
      name: 'JavaScript',
      content: method === 'ws'
        ? makeWsJsCode(spec, entry, path)
        : makeJsCode(spec, entry, path, method)
    },
    {
      language: 'py',
      name: 'Python 3',
      content: method === 'ws'
        ? makeWsPythonCode(spec, entry, path)
        : makePythonCode(spec, entry, path, method),
    },
    {
      language: 'cpp',
      name: 'C++',
      content: method === 'ws'
        ? makeWsCppCode(spec, entry, path)
        : makeCppCode(spec, entry, path, method)
    },
  ];
}

function getResponses(entry) {
  const responses = [];
  for (const key in entry.responses) {
    const response = entry.responses[key];
    let example = response.examples && response.examples['application/json'];
    example = example && JSON.stringify(example, null, 2);
    responses.push({
      code: key,
      // TODO: status name
      success: !/^\d+$/.test(key) || key.startsWith('2'),
      example,
      // TODO: details
    });
  }
  return responses;
}

function getResponsesDetails(entry) {
  switch (entry.responses.default.schema.type) {
    case 'array':
      return entry.responses.default.schema.items.properties;
    case 'object':
      return entry.responses.default.schema.properties;
  }
}
