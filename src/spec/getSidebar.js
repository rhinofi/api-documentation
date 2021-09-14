import {forEachEndpoint} from './forEachEndpoint';

var categoriesToExclude = [
  'internal', // Here to stay but for internal use
  'deprecated', // Is meant to disapear in the future / not to be used anymore
  'hidden' // Hidden for other reasons (ex: feature not released yet)
]

export function getSidebar(spec) {
  const categories = new Map();
  forEachEndpoint(spec, (entry, orgPath) => {
    const categoryName = entry.tags && entry.tags[0];
    const category = categories.get(categoryName) || {name: categoryName, items: []};
    category.items.push({
      title: entry.title || orgPath,
      name: entry.operationId,
      link: '#' + entry.operationId,
    });
    categories.set(categoryName, category);
  });
  return [...categories.values()]
    .filter(category => !categoriesToExclude.includes(category.name.toLowerCase()))
}
