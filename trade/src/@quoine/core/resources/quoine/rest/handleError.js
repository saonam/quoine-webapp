/**
 * Always normalize error message. Don't show directly
 */

const isString = target => typeof target === 'string';
const isObject = target => (
  Object.prototype.toString.call(target) === '[object Object]'
);

const parseString = string => (
  string.toLowerCase()
  // all separators to dash
  .replace(/[^a-z0-9]+/g, '-')
  // remove trailing dash
  .replace(/-$/g, '')
  // remove missing translation note (server)
  .replace('translation-missing-', '')
);

const parseObject = (object) => {
  const key = Object.keys(object)[0];
  return parseString(`${key}-${object[key]}`);
};

const parse = (error) => {
  let message = 'other';
  if (isString(error.message)) {
    message = parseString(error.message);
    // ===
  } else if (isString(error.errors)) {
    message = parseString(error.errors);
  } else if (isObject(error.errors)) {
    message = parseObject(error.errors);
    // ===
  } else if (isObject(error.error)) {
    message = parseString(error.error.message);
  } else if (isString(error.error)) {
    message = parseString(error.error);
  }
  return `${message}`;
};

export default (error, prefix) => {
  // if status and statusText are missing, it is mostly "Failed to Fetch"
  // which is by cors or network failure
  const base = {
    status: error.status || 500,
    message: `error:${
      error.statusText ? parseString(error.statusText) : 'network'
    }`,
  };

  // same as above: issue by network failure doesn't have json either
  if (!error.json) {
    return Promise.reject(base);
  }

  // json() to find out server's message (better than statusText)
  return error.json()
  .then(json => ({
    ...base,
    message: `${prefix}-error:${parse(json)}`,
  }))
  // some response does have 'json' method but failed to json()
  .catch(() => base)
  // ensure always return error
  .then(err => Promise.reject(err));
};
