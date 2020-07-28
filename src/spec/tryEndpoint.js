export async function tryEndpoint(endpoint, parameterValues, body) {
  try {
    const path = getUrl(endpoint.path, parameterValues, endpoint.parameters);
    const response = await fetch(path, {
      method: endpoint.method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    });
    const json = await response.json();

    return [null, {
      status: response.status,
      statusText: response.statusText,
      body: json,
    }];
  } catch (err) {
    return [err];
  }
}

function getUrl(path, parameterValues, parameters) {
  const getParameterDefaultValue = (name) =>
    parameters.find((p) => p.name === name)?.['x-example'];
  path = path.replace(
    /\{([^}]*)\}/g,
    (_, name) => parameterValues[name] ?? getParameterDefaultValue(name)
  );

  const formatedPath =
    parameters && parameters.length
      ? parameters.reduce((acc, current) => {
          const currentExample = current['x-example'];
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
