const exchange = ({ value, frm, to, fxRates }) => {
  if (frm === to) { return value; }

  const fxRate = fxRates[frm] && fxRates[frm][to];
  if (fxRate) {
    return value * fxRate;
  }

  return 0;
};

export default exchange;
