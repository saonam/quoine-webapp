const validateDistance = ({ order, orderBook }) => {
  if (
    order.type !== 'trailing-stop' ||
    !orderBook.buys[0] ||
    !orderBook.sells[0]
  ) {
    return false;
  }

  const distance = Number(order.distance);
  let percent;

  if (order.distanceType === 'percentage') {
    percent = distance;
  } else {
    const bid = orderBook.buys[0][0];
    const ask = orderBook.sells[0][0];

    if (order.side === 'buy') {
      percent = (distance / ask) * 100;
    } else {
      percent = (distance / bid) * 100;
    }
  }

  if (percent >= 50) {
    return 'price-distance-must-be-less-than-50-of-market-price';
  }

  return false;
};

export default validateDistance;
