const validatePrice = ({ order }) => {
  const { type, price } = order;
  if (
    type === 'market' ||
    type === 'trailing-stop'
  ) {
    return false;
  }
  if (price <= 0) {
    return 'price-bigger-than-min';
  }
  return false;
};

export default validatePrice;
