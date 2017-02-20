import * as quoine from './quoine';
import * as bitmex from './bitmex';

export const load = () => Promise.all([
  quoine.load(), bitmex.load(),
]).then((response) => {
  const [quoineProducts, bitmexProducts] = response;
  return [...quoineProducts, ...bitmexProducts];
});

export const subscribe = ({ isFutures, ...payload }, onUpdate) => (
  (isFutures ? bitmex : quoine).subscribe(payload, onUpdate)
);

// actually there is no unsubscribe atm
export const unsubscribe = () => {};
