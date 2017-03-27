import getHeaders from './getHeaders';
import handleResponse from './handleResponse';
import handleError from './handleError';

const host = process.env.REACT_APP_QUOINE_HOST;

const loaderCache = {};

const defaultOptions = {
  isForm: false,
  errorPrefix: 'error',
};

const main = (method, path, rawOptions) => {
  const options = { ...defaultOptions, ...rawOptions };
  const { isForm, body: rawBody, errorPrefix, vendorId } = options;
  // Some REST Apis with method is 'get' but no need to cache
  // i.e: GET `/users/select_language?lang=${language}`
  // is used to change language, so we need to pass option { useCache: false }
  // in such api to force resources not cache it.
  // ++
  // And some REST Apis with method is 'post' but need to cache
  // remember to pass option { useCache: true } for them when using
  // i.e: POST '/users/check_status'
  const useCache = (
    method === 'get' && options.useCache === undefined
  ) ? true : options.useCache;

  // check cache
  const cacheName = `${method} ${path}`;
  const cache = useCache && loaderCache[cacheName];
  if (cache) { return cache; }

  const loader = getHeaders({ path, isForm, vendorId })
  .then((headers) => {
    const url = host + path;
    const body = isForm ? rawBody : JSON.stringify(rawBody);
    return fetch(url, { method, headers, body });
  })
  .then(response => (
    response.ok ? response : Promise.reject(response)
  ))
  .then(handleResponse)
  .catch(error => handleError(error, errorPrefix));

  // check cache
  if (useCache) {
    loaderCache[cacheName] = loader;
  }

  return loader;
};

// alias for convenient
export default {
  get: main.bind(null, 'get'),
  put: main.bind(null, 'put'),
  post: main.bind(null, 'post'),
  del: main.bind(null, 'delete'),
};
