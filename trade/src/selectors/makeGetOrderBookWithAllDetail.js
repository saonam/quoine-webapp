import { createSelector } from 'reselect';

import getSelfMap from 'selectors/getOrderBookSelfMap';

const getOrderBook = (state, props) => state.orderBook[props.side];
const getSide = (state, props) => props.side;

const getTotalQty = (orderBook) => (
  orderBook.reduce((total, level) => {
    const quantity = level[1];
    return total + quantity;
  }, 0)
);

export default () => createSelector(
  [getOrderBook, getSelfMap, getSide],
  (orderBook, selfMap, side) => {
    const totalQty = getTotalQty(orderBook);

    let cumulativeValue = 0;
    const models = orderBook.map(level => {
      const [price, quantity] = level;
      const self = selfMap[price];
      const id = `${price}${quantity}${self}`;

      cumulativeValue += quantity;
      const cumulativePercent = (cumulativeValue / totalQty) * 100;
      return { id, price, quantity, self, cumulativeValue, cumulativePercent };
    });

    if (side === 'sells') {
      models.reverse();
    }

    return models;
  },
);
