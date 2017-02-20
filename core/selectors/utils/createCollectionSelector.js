import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => {
  const prevState = prev[0];
  const nextState = next[0];
  return (
    prevState.keys !== nextState.keys ||
    prevState.filters !== nextState.filters
  );
};

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
