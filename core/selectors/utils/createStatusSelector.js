import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const shouldUpdate = (prev, next) => {
  const prevState = prev[0];
  const nextState = next[0];
  return (
    prevState.erroring !== nextState.erroring ||
    prevState.confirming !== nextState.confirming ||
    prevState.reporting !== nextState.reporting
  );
};

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
