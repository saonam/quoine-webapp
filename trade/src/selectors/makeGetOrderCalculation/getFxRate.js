const getFxRate = ({ frm, to, fxRates, products }) => {
  if (frm === to) { return 1; }

  // frm & to are fiat
  const frmRate = fxRates[frm];
  const toRate = fxRates[to];

  if (frmRate && toRate) {
    return frmRate / toRate;
  }

  // frm or to is crypto
  const { keys, models } = products;
  const mapKey = keys.find(key => {
    const product = models[key];
    return (
      (product.baseCurrency === frm && product.quoteCurrency === to) ||
      (product.baseCurrency === to && product.quoteCurrency === frm)
    );
  });

  if (mapKey) {
    const mapProduct = models[mapKey];
    return (mapProduct.bid + mapProduct.ask) / 2;
  }

  return 0;
};

export default getFxRate;
