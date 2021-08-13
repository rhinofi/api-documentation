import { getExtraHeaders } from './getExtraHeaders';
import { getParamExample } from './getParamExample';

export async function tryEndpoint(endpoint, parameterValues, body) {
  try {
    const path = getUrl(endpoint.path, parameterValues, endpoint.parameters);
    const extraHeaders = getExtraHeaders(endpoint.headers)
    const response = await fetch(path, {
      method: endpoint.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...extraHeaders
      },
      body,
    });
    const responseBody = response.headers.get('Content-Type').includes('application/json')
      ? await response.json()
      : await response.text()

    return [null, {
      status: response.status,
      statusText: response.statusText,
      body: responseBody,
    }];
  } catch (err) {
    return [err];
  }
}

function getUrl(path, parameterValues, parameters) {
  const getParameterDefaultValue = (name) =>
  getParamExample(parameters.find((p) => p.name === name))
  path = path.replace(
    /\{([^}]*)\}/g,
    (_, name) => parameterValues[name] ?? getParameterDefaultValue(name)
  );

  const formatedPath =
    parameters && parameters.length
      ? parameters.reduce((acc, current) => {
          const currentExample = getParamExample(current);
          const currentValueInParameter = parameterValues[current.name];

          if (
            current.in === 'query' &&
            (currentExample || currentValueInParameter)
          ) {
            acc += !acc ? '?' : '&';
            acc += current.name + '=';
            acc += currentValueInParameter || currentExample;
          }

          return acc;
        }, '')
      : '';

  return path + formatedPath;
}
