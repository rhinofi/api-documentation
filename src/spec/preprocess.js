import {getSidebar} from './getSidebar';
import {getEndpoints} from './getEndpoints';

export function preprocess(spec) {
  var categoriesToExclude = [
    'internal', // Here to stay but for internal use
    'deprecated', // Is meant to disapear in the future / not to be used anymore
    'hidden' // Hidden for other reasons (ex: feature not released yet)
  ];
  return {
    sidebar: getSidebar(spec, categoriesToExclude),
    endpoints: getEndpoints(spec, categoriesToExclude),
  };
}
