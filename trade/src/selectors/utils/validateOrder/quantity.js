const validateQuantity = ({ order }) => {
  const { baseCurrency, quantity } = order;

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
    case 'BTC': {
      if (quantity < 0.01) {
        return 'quantity-min-BTC';
      }
      if (quantity > 100) {
        return 'quantity-max-BTC';
      }
      break;
    }
    default: {
      // this case have no limit
      return false;
    }
  }

  return false;
};

export default validateQuantity;
