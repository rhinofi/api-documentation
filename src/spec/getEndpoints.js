import mapValues from 'lodash.mapvalues'
import {forEachEndpoint} from './forEachEndpoint';
import {getBodyExample} from './getBodyExample';
import {makeJsCode, makeWsJsCode} from './makeJsCode';
import {makePythonCode, makeWsPythonCode} from './makePythonCode';
import {makeCppCode, makeWsCppCode} from './mapeCppCode';
import {makeCurlCode} from './makeCurlCode';
import {makeWscatCode} from './makeWscatCode';
import { getParamExample } from './getParamExample';
import { sortBy } from 'lodash';

export function getEndpoints(spec) {
  const endpoints = [];
  forEachEndpoint(spec, (entry, orgPath, method) => {
    // workaround for unique ws socket endpoint
    const path = orgPath.replace(/{ws-uid-\d+}/g, '');

    const responses = getResponses(entry);
    const calls = getCalls(spec, entry, path, method);
    const parameters = getParameters(entry);
    const headers = getHeaders(entry);
    const body = getBodyExample(entry);
    const responsesDetails = getResponsesDetails(entry);
    const protocol = method === 'ws' ? 'wss' : 'https';
    const requestDetails = getRequestDetails(entry)

    const endpoint = {
      method: method.toUpperCase(),
      title: entry.title || path,
      name: entry.operationId,
      link: '#' + entry.operationId,
      path: `${protocol}://${spec.host}${path}`,
      description: entry.summary, // TODO: markdown?
      calls,
      responses,
      parameters,
      headers,
      body: body ? JSON.stringify(body, null, 4) : undefined,
      responsesDetails,
      requestDetails
    };

    endpoints.push(endpoint);
  });
  return endpoints;
}

function getParameters(entry) {
  if (!entry.parameters) return;
  return entry.parameters.filter(parameter => parameter.in !== 'body' && parameter.in !== 'header');
}

function getHeaders(entry) {
  if (!entry.parameters) return;
  return entry.parameters.filter(parameter => parameter.in === 'header');
}

function getCalls(spec, entry, path, method) {
  return [
    {
      language: 'bash',
      name: method === 'ws' ? 'wscat' : 'cURL',
      content: method === 'ws'
        ? makeWscatCode(spec, entry, path)
        : makeCurlCode(spec, entry, path, method)
    },
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
    }
  ];
}

function buildExample(schema) {
  const schemaWideExample = getParamExample(schema)
  if (schemaWideExample !== undefined) {
    return schemaWideExample
  }
  if (schema.properties) {
    return mapValues(schema.properties, prop => {
      const propExample = getParamExample(prop) || buildExample(prop)
      if (propExample === undefined) {
        console.warn('Missing example in one of object properties', schema, prop)
        throw new Error('Missing example in one of object properties', {schema, prop})
      }
      return propExample
    })
  } else if (schema.items) {
    return [ buildExample(schema.items) ]
  }
  
}

function getResponses(entry) {
  const responses = [];

  if (!entry.responses) {
    console.warn('No responses for entry', entry)
  }

  const hasDefault = entry.responses.default &&
    entry.responses.default.schema

  for (const key in entry.responses) {
    const response = entry.responses[key];
    // Overlay
    let example = response.examples && response.examples['application/json'];
    
    // Examples directly from Joi
    if (!example && response.schema) {
      try {
        example = buildExample(response.schema)
      } catch (e) {}
    }
    
    example = example && JSON.stringify(example, null, 2);

    if (hasDefault && key === '200') {
      continue;
    }

    responses.push({
      code: key === '200' ? 'default' : key,
      // TODO: status name
      success: !/^\d+$/.test(key) || key.startsWith('2'),
      example,
      // TODO: details
    });
  }
  return sortBy(responses, response => response.code !== 'default');
}

function getResponsesDetails(entry) {
  if (!entry.responses) {
    console.warn('No responses for entry', entry)
  }
  const hasDefault = entry.responses.default &&
    entry.responses.default.schema;

  if (!hasDefault) {
    entry.responses.default = entry.responses['200'];
  }
  switch (entry.responses.default.schema.type) {
    case 'array':
      return entry.responses.default.schema.items.properties;
    case 'object':
      return entry.responses.default.schema.properties;
  }
}

function getRequestDetails(entry) {
  // TODO: currently docs don't support model $ref,
  // all default responses are defined manually in overlay

  const bodyParameter = (entry.parameters || []).find(p => p.in === 'body');
  if (!bodyParameter) return undefined

  switch (bodyParameter.schema.type) {
    case 'array':
      return bodyParameter.schema.items.properties;
    case 'object':
      return bodyParameter.schema.properties;
  }
}
