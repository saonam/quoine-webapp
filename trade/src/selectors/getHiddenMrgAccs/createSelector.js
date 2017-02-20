import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => (
  // 0: trading
  prev[0] !== next[0] ||
  // 0: mrgAccs
  prev[1].keys !== next[1].keys ||
  prev[1].hiddens !== next[1].hiddens ||
  false
);

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
