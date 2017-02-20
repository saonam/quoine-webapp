import * as quoine from './quoine';
import * as bitmex from './bitmex';

export const load = ({ isFutures, ...payload }) => (
  (isFutures ? bitmex : quoine).load(payload)
);

export const subscribe = ({ isFutures, ...payload }, onUpdate) => (
  (isFutures ? bitmex : quoine).subscribe(payload, onUpdate)
);

export const unsubscribe = ({ isFutures, ...payload }) => (
  (isFutures ? bitmex : quoine).unsubscribe(payload)
);
