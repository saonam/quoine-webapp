import * as quoine from './quoine';
import * as bitmex from './bitmex';

export const loadAll = () => Promise.all([
  quoine.loadAll(),
  bitmex.loadAll(),
]).then((response) => {
  const [quoineAccounts, bitmexAccounts] = response;
  return [...quoineAccounts, ...bitmexAccounts];
});

// payload: { currency, isFutures }
export const loadDetail = ({ isFutures, ...payload }) => (
  (isFutures ? bitmex : quoine).loadDetail(payload)
);

// payload: { currency, isFutures, userId }
export const subscribe = ({ isFutures, ...payload }, onUpdate) => (
  (isFutures ? bitmex : quoine).subscribe(payload, onUpdate)
);

// actually there is no unsubscribe atm
export const unsubscribe = () => {};

export const add = quoine.add;
