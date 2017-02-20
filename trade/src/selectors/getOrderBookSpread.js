import { createSelector } from 'reselect';

const getAsk = state => state.orderBook.sells[0];
const getBid = state => state.orderBook.buys[0];

export default createSelector(
  [getAsk, getBid], (ask, bid) => {
    if (!ask || !bid) { return undefined; }
    return ask[0] - bid[0];
  },
);
