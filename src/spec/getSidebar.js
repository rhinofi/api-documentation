import {forEachEndpoint} from './forEachEndpoint';

export function getSidebar(spec) {
  const categories = new Map();
  forEachEndpoint(spec, (entry) => {
    const categoryName = entry.tags && entry.tags[0];
    const category = categories.get(categoryName) || {name: categoryName, items: []};
    category.items.push({
      title: entry.title,
      name: entry.operationId,
      link: '#' + entry.operationId,
    });
    categories.set(categoryName, category);
  });
  return [...categories.values()];
}
