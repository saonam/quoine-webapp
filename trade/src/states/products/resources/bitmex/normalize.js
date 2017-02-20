export const update = (raw) => {
  const product = {
    symbol: raw.symbol,
  };
  if (raw.askPrice) {
    product.ask = raw.askPrice;
  }
  if (raw.bidPrice) {
    product.bid = raw.bidPrice;
  }
  return product;
};

export const partial = raw => ({
  ...update(raw),
  // symbol, ask and bid price are set in update
  // ===
  id: null,
  // currencyPair ~== underlyingSymbol
  // (underlyingSymbol has trailing '=' character)
  currencyPair: `${raw.underlying}${raw.quoteCurrency}`,
  isFutures: true,
  // ===
  // actually base currency here should be "settlCurrency"
  baseCurrency: raw.rootSymbol, // XBJ (XBTJPY)
  underlyingCurrency: raw.underlying, // XBT (BTC)
  quoteCurrency: raw.quoteCurrency, // JPY
  // ===
  highAsk: raw.highPrice, // in JPY
  lowBid: raw.lowPrice, // in JPY
  // ===
  indicator: raw.lastChangePcnt, // in percent
  // ===
  volume: raw.volume24h / 1e8, // in satoshi
  prev24H: raw.prevPrice24h,
  last: raw.lastPrice,
  // these are futures specific info to calculate
  // multiplier: raw.multiplier / raw.underlyingToSettleMultiplier, // 100 JPY I guess
  // ===
  feeTaker: raw.takerFee,
  feeMaker: raw.makerFee,
});
