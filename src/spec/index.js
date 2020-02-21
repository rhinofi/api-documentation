import spec from './swagger-v11--submitted.json';
import {preprocess} from './preprocess';

export function loadSpec() {
  const processed = preprocess(spec);
  return processed;
}
