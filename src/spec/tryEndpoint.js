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
  const getParameterDefaultValue = name => parameters.find(p => p.name === name)?.['x-example'];
  return path.replace(/\{([^}]*)\}/g, (_, name) => parameterValues[name] ?? getParameterDefaultValue(name));
}
