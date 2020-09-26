const getPathWithParams = (routePath, params = {}) =>
  Object.keys(params).reduce((url, key) => url.replace(`:${key}`, params[key] || ''), routePath);

export default getPathWithParams;
