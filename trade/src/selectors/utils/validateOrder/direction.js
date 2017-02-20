const validateDirection = (order, product, mrgAcc) => {
  if (
    !mrgAcc ||
    order.market !== 'margin' ||
    order.direction !== 'one-direction'
  ) {
    return false;
  }
  if (order.side === 'buy' && mrgAcc.positionShort !== 0) {
    return 'direction-short-need-empty';
  }
  if (order.side === 'sell' && mrgAcc.positionLong !== 0) {
    return 'direction-long-need-empty';
  }
  return false;
};

export default validateDirection;
