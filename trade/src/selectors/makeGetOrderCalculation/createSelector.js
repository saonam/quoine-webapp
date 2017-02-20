import { createSelectorCreator } from 'reselect';

import { memoizeWithUpdate } from '@quoine/selectors/utils';

const emptyArray = [];

const shouldUpdate = (prev, next) => {
  // 0 form
  if (prev[0] !== next[0]) { return true; }
  // 1 orderBook
  const side = next[0].side === 'buy' ? 'sells' : 'buys';
  const prevPrice = (prev[1][side][0] || emptyArray)[1];
  const nextPrice = (next[1][side][0] || emptyArray)[1];
  if (prevPrice !== nextPrice) { return true; }

  return (
    // 2 interestBook
    prev[2] !== next[2] ||
    // 3 fees
    prev[3] !== next[3] ||
    // 4 exchangeRates
    prev[4] !== next[4]
  );
};

export default createSelectorCreator(memoizeWithUpdate, shouldUpdate);
