import { bitmex } from '@quoine/resources';

import * as normalize from './normalize';

export const load = () => bitmex.getReady()
  .then(() => [
    { symbol: 'XBJ24H', isFutures: true },
    { symbol: 'XBJ48H', isFutures: true },
    { symbol: 'XBJ7D', isFutures: true },
    { symbol: 'XBJ14D', isFutures: true },
    { symbol: 'XBJZ16', isFutures: true },
  ])
  .catch(() => [])
  .then(response => Promise.resolve(response));

export const subscribe = ({ symbol }, onUpdate) => (
  bitmex.subscribe(
    `instrument:${symbol}`, 'instrument',
    ({ action, data }) => onUpdate(normalize[action](data[0])),
  )
);
