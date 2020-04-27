
import swaggerData from './swagger-v11--submitted.json';
import swaggerOverlay from './swagger-overlay.json';
import {preprocess} from './preprocess';
import merge from 'lodash.merge';

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
  const fullSpec = merge(spec, swaggerOverlay);
  return preprocess(fullSpec);
}
