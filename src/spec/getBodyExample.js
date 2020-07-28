export function getBodyExample(entry) {
  const bodyParameter = (entry.parameters || []).find(p => p.in === 'body');
  if (!bodyParameter) return undefined;
  return getExampleFromSchema(bodyParameter.schema);
}

export function getExampleFromSchema(schema) {
  switch (schema.type) {
    case 'string':
    case 'number':
      return schema.example;
    case 'object':
      return mapValues(schema.properties, getExampleFromSchema);
  }
}

function mapValues(obj, map) {
  const res = {};
  for (const key of Object.keys(obj)) {
    res[key] = obj[key].example;
  }
  return res;
}
