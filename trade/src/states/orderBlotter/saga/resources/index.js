import quoine from './quoine';
import bitmex from './bitmex';

const load = ({ isFutures, ...payload }, page) => (
  (isFutures ? bitmex : quoine).load(payload, page)
);

const subscribe = ({ isFutures, ...payload }, onUpdate) => (
  (isFutures ? bitmex : quoine).subscribe(payload, onUpdate)
);

const unsubscribe = ({ isFutures, ...payload }) => (
  (isFutures ? bitmex : quoine).unsubscribe(payload)
);

export default { load, subscribe, unsubscribe };
