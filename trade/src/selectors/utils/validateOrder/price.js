const validateBuyPrice = ({ type, price }, { ask, bid }) => {
  if (type === 'limit' && price >= ask) {
    return 'price-limit-smaller-than-market-ask';
  }
  if (type === 'stop' && price <= bid) {
    return 'price-stop-bigger-than-market-ask';
  }
  return false;
};

const validateSellPrice = ({ type, price }, { ask, bid }) => {
  if (type === 'limit' && price <= bid) {
    return 'price-limit-bigger-than-market-bid';
  }
  if (type === 'stop' && price >= ask) {
    return 'price-stop-smaller-than-market-bid';
  }
  return false;
};

const validatePrice = (order, product) => {
  if (
    !product ||
    order.type === 'market' ||
    order.type === 'trailing-stop'
  ) {
    return false;
  }
  if (order.price <= 0) {
    return 'price-bigger-than-min';
  }
  if (order.side === 'buy') {
    return validateBuyPrice(order, product);
  }
  if (order.side === 'sell') {
    return validateSellPrice(order, product);
  }
  return false;
};

export default validatePrice;
