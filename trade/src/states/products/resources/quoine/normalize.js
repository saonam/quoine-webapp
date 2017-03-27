import { addBaseQuote } from '@quoine/states/utils';

export const one = raw => ({
  ...addBaseQuote(raw),
  id: raw.id,
  currencyPair: raw.currency_pair_code,
  symbol: raw.currency_pair_code,
  isFutures: false,
  // ===
  ask: Number(raw.market_ask),
  highAsk: Number(raw.high_market_ask),
  bid: Number(raw.market_bid),
  lowBid: Number(raw.low_market_bid),
  // ===
  indicator: Number(raw.indicator),
  // ===
  volume: Number(raw.volume_24h),
  prev24H: Number(raw.last_price_24h),
  last: Number(raw.last_traded_price),
  // ===
  feeTaker: Number(raw.taker_fee),
  feeMaker: Number(raw.maker_fee),
  // ===
  currency: raw.currency,
  fxRate: Number(raw.exchange_rate),
});

export const all = raw => (raw.map(one));
