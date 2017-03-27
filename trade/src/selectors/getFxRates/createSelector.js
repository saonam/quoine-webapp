import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => (
  prev[0].keys !== next[0].keys ||
  false
);

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
