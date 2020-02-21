import {getSidebar} from './getSidebar';
import {getEndpoints} from './getEndpoints';

export function preprocess(spec) {
  return {
    sidebar: getSidebar(spec),
    endpoints: getEndpoints(spec),
  };
}
