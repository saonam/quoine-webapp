import createSelector from './createSelector';

const getProducts = state => state.products;
const getUser = state => state.user;

export default createSelector(
  [getProducts, getUser],
  (products, user) => (
    products.keys.reduce((fees, key) => {
      const product = products.models[key];
      return {
        ...fees,
        [key]: (product && user) ? {
          taker: user.fees[`taker:CASH:${key}`] || product.feeTaker,
          maker: user.fees[`maker:CASH:${key}`] || product.feeMaker,
        } : { taker: 0, maker: 0 },
      };
    }, {})
  ),
);
