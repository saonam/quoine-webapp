const getRate = ({ frm, to, fxRates }) => {
  if (frm === to) { return 1; }

  const frmRate = fxRates[frm];
  const toRate = fxRates[to];

  if (frmRate && toRate) {
    return frmRate / toRate;
  }

  return 0;
};

export default getRate;
