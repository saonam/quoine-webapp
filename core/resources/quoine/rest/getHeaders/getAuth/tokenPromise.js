/**
 * Ensure that token and its id is provided (by accounts iframe, via global
 * variable quoine.auth)
 *
 * Most of the time it is already there (since accounts iframe is simple and
 * load before this main script). However, in case there is network issue
 * and accounts iframe finish loading later than this script, we need to set
 * timeout to check again
 */

const tryGetToken = (resolve, reject) => {
  if (window.quoine.auth.ready) {
    const { tokenId, token } = window.quoine.auth;
    resolve({ tokenId, token });
  } else {
    window.setTimeout(() => tryGetToken(resolve, reject), 1000);
  }
};

export default new Promise(tryGetToken);
