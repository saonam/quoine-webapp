import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => (
  // currencies
  prev[0] !== next[0] ||
  // products
  prev[1].keys !== next[1].keys ||
  false
);

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
