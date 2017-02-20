import { createSelector } from 'reselect';

import getSelfMap from 'selectors/getOrderBookSelfMap';

const getOrderBook = (state, props) => state.orderBook[props.side];
const getSide = (state, props) => props.side;

export default () => createSelector(
  [getOrderBook, getSelfMap, getSide],
  (orderBook, selfMap, side) => {
    const models = orderBook.map(level => {
      const [price, quantity] = level;
      const self = selfMap[price];
      const id = `${price}${quantity}${self}`;
      return { price, quantity, self, id };
    });
    if (side === 'sells') {
      models.reverse();
    }
    return models;
  },
);
