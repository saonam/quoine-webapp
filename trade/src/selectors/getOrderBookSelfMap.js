import { createSelector } from 'reselect';

const getProduct = state => state.trading.product;
// don't worry, order is not update often
const getOrderBlotter = state => state.orderBlotter;

export default createSelector(
  [getProduct, getOrderBlotter],
  (product, orderBlotter) => {
    const map = {};
    orderBlotter.keys.forEach(id => {
      const order = orderBlotter.models[id];
      if (order.status === 'live' && order.product === product) {
        const quantityOpen = order.quantity - order.quantityFilled;
        map[order.price] = (map[order.price] || 0) + quantityOpen;
      }
    });
    return map;
  },
);
