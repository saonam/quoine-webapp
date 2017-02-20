const validateStopLoss = (position, product) => {
  // skip if not set
  if (!position.stopLoss) { return false; }
  if (position.side === 'long' && position.stopLoss >= product.bid) {
    return 'stop-loss-smaller-than-market-bid';
  }
  if (position.side === 'short' && position.stopLoss <= product.ask) {
    return 'stop-loss-larger-than-market-ask';
  }
  return false;
};

export default validateStopLoss;
