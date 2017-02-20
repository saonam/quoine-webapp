const getRate = ({ frm, to, fxRates, orderBook }) => {
  if (frm === to) { return 1; }

  const testRate = fxRates[frm] / fxRates[to];
  if (isFinite(testRate)) { return testRate; }

  if (!orderBook.buys[0]) { return 1; }
  return 1 / (orderBook.buys[0][0]);
};

export default getRate;
