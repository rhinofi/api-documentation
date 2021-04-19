
import swaggerData from './swagger-v11--submitted.json';
import swaggerMarketData from './swagger-market-data.json';
import swaggerOverlay from './swagger-overlay.json';
import {preprocess} from './preprocess';
import merge from 'lodash.merge';

const parseRefs = (properties, definitions) => {
  Object.keys(properties).forEach(propKey => {
    // if sub param is object check its subtree
    if (properties[propKey].type === 'object' && properties[propKey].properties) {
      parseRefs(properties[propKey].properties, definitions)
      // if has $ref, replace with definition
    } else if (properties[propKey].$ref) {
      properties[propKey] = definitions[properties[propKey].$ref.replace('#/definitions/', '')]
      // also parse definition if it has subtrees
      parseRefs(properties[propKey])
    }
  })
}

const conciliation = data => {
  const {paths, definitions} = data;
  Object.keys(paths).forEach(pathKey => {
    Object.keys(paths[pathKey]).forEach(methodKey => {
      const item = paths[pathKey][methodKey] || {};
      const responses = item.responses || {};

      const parameters = item.parameters || [];

      parameters.forEach(param => {
        if (param.schema && param.schema.$ref) {
          param.schema = definitions[param.schema.$ref.replace('#/definitions/', '')];

          parseRefs(param.schema.properties, definitions)
        }
      });

      Object.keys(responses).forEach(responseKey => {
        const {schema} = responses[responseKey];
        if (schema && schema.$ref) {
          responses[responseKey].schema = definitions[schema.$ref.replace('#/definitions/', '')];
        }
      });
    });
  });

  return data;
};

export function loadSpec() {
  const spec = conciliation(swaggerData);
  const fullSpec = merge(spec, swaggerMarketData, swaggerOverlay);
  return preprocess(fullSpec);
}
