import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => (
  // 0: form
  prev[0] !== next[0] ||
  // 1: trading
  prev[1] !== next[1] ||
  // 2: products
  prev[2].keys !== next[2].keys ||
  false
);

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
