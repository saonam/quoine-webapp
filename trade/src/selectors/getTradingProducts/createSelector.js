import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => (
  // 0: trading
  prev[0] !== next[0] ||
  // 1: products
  prev[1].keys !== next[1].keys ||
  // 2: mrgAccs
  prev[2].keys !== next[2].keys ||
  prev[2].hiddens !== next[2].hiddens ||
  // 3: tradingMrgAccs
  prev[3] !== next[3] ||
  false
);

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
