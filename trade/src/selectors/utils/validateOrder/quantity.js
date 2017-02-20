const validateQuantity = ({ baseCurrency, quantity }) => {
  if (baseCurrency === 'ETH') {
    if (quantity < 0.5) {
      return 'quantity-min-ETH';
    }
    if (quantity > 1000) {
      return 'quantity-max-ETH';
    }
  } else {
    if (quantity < 0.01) {
      return 'quantity-min-BTC';
    }
    if (quantity > 100) {
      return 'quantity-max-BTC';
    }
  }
  return false;
};

export default validateQuantity;
