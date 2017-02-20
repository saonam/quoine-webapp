import Pusher from 'pusher-js';

const getOptions = () => {
  const options = {
    enabledTransports: ['ws', 'wss'],
  };
  if (process.env.REACT_APP_PUSHER_HOST) {
    options.wsHost = process.env.REACT_APP_PUSHER_HOST;
    options.wsPort = process.env.REACT_APP_PUSHER_PORT;
  }
  return options;
};

const key = process.env.REACT_APP_PUSHER_KEY;
const pusher = key ? new Pusher(key, getOptions()) : {};

export default pusher;
