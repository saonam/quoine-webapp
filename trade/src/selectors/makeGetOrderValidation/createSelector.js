import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => {
  if (
    prev[0] === next[0] &&
    prev[2].products === next[2].products &&
    prev[2].mrgAccs === next[2].mrgAccs
  ) {
    return false;
  }
  return true;
};

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
