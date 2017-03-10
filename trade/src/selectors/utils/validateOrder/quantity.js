const validateQuantity = ({ baseCurrency, quantity }) => {
  switch (baseCurrency) {
    case 'ETH': {
      if (quantity < 0.5) {
        return 'quantity-min-ETH';
      }
      if (quantity > 1000) {
        return 'quantity-max-ETH';
      }
      break;
    }
    case 'XBJ': {
      if (Number(quantity) !== parseInt(quantity, 10)) {
        return 'quantity-integer';
      }
      break;
    }
    case 'BTC': default: {
      if (quantity < 0.01) {
        return 'quantity-min-BTC';
      }
      if (quantity > 100) {
        return 'quantity-max-BTC';
      }
      break;
    }
  }
  return false;
};

export default validateQuantity;
