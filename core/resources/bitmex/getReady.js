import getAuth from './getAuth';

let socket;
const handlers = {};
let promise;

// default onmessage handler
const onmessage = (event) => {
  const message = JSON.parse(event.data);

  if (message.table) {
    const handler = handlers[message.table];
    if (handler) {
      const { action, data } = message;
      handler({ action, data });
    }
  }
};

const promiseCreator = (resolve, reject) => {
  // Bitmex API is optional
  const host = process.env.REACT_APP_BITMEX_HOST;
  if (!host) {
    return reject({ forgive: true });
  }

  return getAuth().then((response) => {
    // check if auth
    if (!response.ok) {
      return reject({ forgive: true });
    }

    // has bitmex and authenticated
    socket = new WebSocket(`wss://${host}/realtime`);
    // send authentication
    socket.onopen = () => {
      const { apiKey, nonce, signature } = response;
      const authArgs = [apiKey, nonce, signature];
      const message = JSON.stringify({ op: 'authKey', args: authArgs });
      socket.send(message);
    };

    // response authentication
    // we don't need to check further since we only send 1 message above
    // and waiting for that exactly message
    socket.onmessage = () => {
      resolve({ socket, handlers });
      // now it is authenticated => bind the default on message
      socket.onmessage = onmessage;
    };

    return 'done';
  });
};

const getReady = () => {
  if (promise) { return promise; }
  promise = new Promise(promiseCreator);
  return promise;
};

export default getReady;
