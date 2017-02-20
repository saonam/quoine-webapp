import getAuth from './getAuth';

const base = {
  Accept: 'application/json',
  'X-Quoine-API-Version': 2,
  'X-Quoine-Device': 'web-native',
  'X-Quoine-Auth': '', // will be set after authentication
  'X-Quoine-Vendor-ID': process.env.REACT_APP_VENDOR_ID || 3,
};

export default ({ path, isForm }) => (
  getAuth(path).then((auth) => {
    const headers = new Headers(base);
    headers.set('X-Quoine-Auth', auth);
    if (!isForm) {
      headers.set('Content-Type', 'application/json');
    }
    return headers;
  })
);
