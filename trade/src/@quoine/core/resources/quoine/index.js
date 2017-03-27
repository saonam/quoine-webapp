import rest from './rest';
import { subscribe, unsubscribe } from './websocket';

window.quoineRest = rest;

export default {
  get: rest.get,
  put: rest.put,
  post: rest.post,
  del: rest.del,
  subscribe,
  unsubscribe,
};
