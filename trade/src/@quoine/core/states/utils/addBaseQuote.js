export default raw => ({
  quoteCurrency: raw.currency_pair_code.slice(3),
  baseCurrency: raw.currency_pair_code.slice(0, 3),
});
