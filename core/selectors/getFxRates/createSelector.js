import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => (
  // 0: products
  prev[0].keys !== next[0].keys ||
  // 1: user
  prev[1] !== next[1] ||
  false
);

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
