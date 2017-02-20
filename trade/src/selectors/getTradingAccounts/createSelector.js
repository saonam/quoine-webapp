import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => (
  // 0: trading
  prev[0].account !== next[0].account ||
  prev[0].market !== next[0].market ||
  // 1: accounts
  prev[1].keys !== next[1].keys ||
  prev[1].hiddens !== next[1].hiddens ||
  // 1: currencies
  prev[2].keys !== next[2].keys ||
  false
);

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
