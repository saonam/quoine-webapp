import { addBaseQuote } from '@quoine/states/utils';

export const summary = (raw, { name }) => ({
  name,
  positionLong: Number(raw.long_summary.position),
  positionShort: Number(raw.short_summary.position),
  baseOpenPriceLong: Number(raw.long_summary.base_open_price),
  baseOpenPriceShort: Number(raw.short_summary.base_open_price),
  pnlLong: Number(raw.long_summary.pnl),
  pnlShort: Number(raw.short_summary.pnl),
  // sum position and sum pnl will be calculated in selector
});

export const one = raw => ({
  ...addBaseQuote(raw),
  ...summary(raw, {}),
  id: raw.id,
  account: raw.funding_currency,
  product: raw.currency_pair_code,
  name: `${raw.funding_currency}${raw.currency_pair_code}`,
});

export const all = raw => (raw.map(one));

export const close = (positions) => {
  const mrgAcc = {
    count: 0,
    position: 0,
    pnl: 0,
  };
  const first = positions[0];
  if (first) {
    mrgAcc.account = first.funding_currency;
    mrgAcc.baseCurrency = first.currency_pair_code.slice(0, 3);
    mrgAcc.side = first.side;
  }
  positions.forEach(position => {
    mrgAcc.count += 1;
    mrgAcc.position += Number(position.close_quantity);
    mrgAcc.pnl += Number(position.pnl);
    if (mrgAcc.side !== 'both' && mrgAcc.side !== position.side) {
      mrgAcc.side = 'both';
    }
  });
  return mrgAcc;
};
