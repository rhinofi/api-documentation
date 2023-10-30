import {forEachEndpoint} from './forEachEndpoint';


var categoriesOrder = [
  'platform',
  'wallet',
  'trading',
  'amm',
  'market',
  'governance',
  'dlm',
  'account',
  'public',
  'integration'
];

const getCategoryWeight = (category) => {
  return categoriesOrder.length - categoriesOrder.indexOf(category.name.toLowerCase())
};

export function getSidebar(spec, categoriesToExclude) {
  const categories = new Map();
  forEachEndpoint(spec, (entry, orgPath, method) => {
    if(!entry.tags) return;
    const categoryName = entry.tags && entry.tags[0];
    const category = categories.get(categoryName) || {name: categoryName, items: []};
    category.items.push({
      title:
        entry.title || // From swagger overlay JSON when entered manually
        entry.description || // From 'notes' field of dvf-pub-api route options if exists
        `${method.toUpperCase()} ${orgPath}`, // GET/POST <url> by default
      name: entry.operationId,
      link: '#' + entry.operationId,
    });
    categories.set(categoryName, category);
  });
  return [...categories.values()]
    .filter(category => !categoriesToExclude.includes(category.name.toLowerCase()))
    .sort((categoryA, categoryB) => getCategoryWeight(categoryB) - getCategoryWeight(categoryA))
}
