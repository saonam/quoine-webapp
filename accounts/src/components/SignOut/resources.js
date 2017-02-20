import { quoine } from '@quoine/resources';

// this is cool, because in order to sign out, we need to authenticate
// first (so we can call the API)
const signOut = (all) => {
  window.sessionStorage.removeItem('token');
  window.sessionStorage.removeItem('tokenId');
  if (all) {
    return quoine.del('/users/sign_out');
  }
  return Promise.resolve();
};

export default { signOut };
