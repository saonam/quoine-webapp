import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => (
  // 0: current trading product
  prev[0] !== next[0] ||
  // 1: all products
  prev[1].keys !== next[1].keys ||
  false
);

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
