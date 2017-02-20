const validateClose = (position) => {
  if (position.quantityClose > position.quantityOpen) {
    return 'close-quantity-larger-than-open-quantity';
  }
  return false;
};

export default validateClose;
