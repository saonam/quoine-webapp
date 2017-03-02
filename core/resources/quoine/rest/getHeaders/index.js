import getAuth from './getAuth';

const base = {
  Accept: 'application/json',
  'X-Quoine-API-Version': 2,
  'X-Quoine-Device': 'web-native',
  // will be set in getHeaders
  'X-Quoine-Auth': '',
  // might be override in getHeaders
  // 3 is QUOINE Pte
  'X-Quoine-Vendor-ID': process.env.REACT_APP_VENDOR_ID || 3,
};

const getHeaders = ({ path, isForm, vendorId }) => (
  getAuth(path).then((auth) => {
    const headers = new Headers(base);
    headers.set('X-Quoine-Auth', auth);
    if (!isForm) {
      headers.set('Content-Type', 'application/json');
    }
    if (vendorId) {
      headers.set('X-Quoine-Vendor-ID', vendorId);
    }
    return headers;
  })
);

export default getHeaders;
