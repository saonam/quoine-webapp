import quoine from './quoine';
import bitmex from './bitmex';

export const load = ({ isFutures, ...payload }, page) => (
  (isFutures ? bitmex : quoine).load(payload, page)
);

export const subscribe = ({ isFutures, ...payload }, onUpdate) => (
  (isFutures ? bitmex : quoine).subscribe(payload, onUpdate)
);

export const unsubscribe = ({ isFutures, ...payload }) => (
  (isFutures ? bitmex : quoine).unsubscribe(payload)
);
