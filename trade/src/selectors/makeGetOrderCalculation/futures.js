export default () => [];

// const getPrice = ({ order, product }) => {
//   if (order.type === 'market') {
//     return order.side === 'buy' ? product.ask : product.bid;
//   }
//   return order.price;
// }
// const getMargin = ({ order, product, price }) => (
//   order.quantity *
//     (product.multiplier / price) *
//     (product.takerFee + 1.0 / order.futuresLeverage)
// );

// export default ({ order, product }) => {
//   const price = getPrice({ order, product });
//   const margin = getMargin({ order, product, price });
//   return { price, margin };
// };
