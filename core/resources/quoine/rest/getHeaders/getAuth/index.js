// Import the old way (expose to global variable window.KJUR)
// Since it is a manually reduced version of the original one
// TODO: use a correct npm version
import './jws-custom.min';

import tokenPromise from './tokenPromise';

const algorithm = 'HS256';
const header = JSON.stringify({ alg: algorithm, typ: 'JWT' });
const device = 'web-native';

export default path => (
  tokenPromise.then((response) => {
    const { tokenId: token_id, token } = response;
    const nonce = Date.now();
    const payload = JSON.stringify({ token_id, device, path, nonce });
    return window.KJUR.jws.JWS.sign(algorithm, header, payload, token);
  })
);
