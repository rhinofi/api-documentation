export function forEachEndpoint(spec, cb) {
  for (const path in spec.paths) {
    for (const method in spec.paths[path]) {
      cb(spec.paths[path][method], path, method);
    }
  }
}
