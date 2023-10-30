export function forEachEndpoint(spec, cb) {
  for (const path in spec.paths) {
    const methods = Object.keys(spec.paths[path])
    // TODO: Multiple methods per path was flaky
    // hence the choice of taking the first vs. all
    if (methods.length > 0) {
      const method = methods[0]
      cb(spec.paths[path][method], path, method);
    }
  }
}
