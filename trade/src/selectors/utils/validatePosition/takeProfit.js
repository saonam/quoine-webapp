const validateTakeProfit = (position, product) => {
  // skip if not set
  if (!position.takeProfit) { return false; }
  if (position.side === 'long' && position.takeProfit <= product.bid) {
    return 'take-profit-larger-than-market-bid';
  }
  if (position.side === 'short' && position.takeProfit >= product.ask) {
    return 'take-profit-smaller-than-market-ask';
  }
  return false;
};

export default validateTakeProfit;
