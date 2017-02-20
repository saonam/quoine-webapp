import { addBaseQuote } from '@quoine/states/utils';

export const one = (raw, symbol) => ({
  ...addBaseQuote({ currency_pair_code: symbol }),
  id: raw.id,
  product: symbol,
  // ===
  quantity: Number(raw.quantity),
  price: Number(raw.price),
  takerSide: raw.taker_side,
  createdAt: raw.created_at,
  side: raw.my_side,
  pnl: Number(raw.pnl),
  orderId: raw.order_id,
  target: raw.target,
});

export const all = (
  { models, current_page: current, total_pages: total },
  symbol
) => ({
  models: models.map(raw => one(raw, symbol)),
  page: current !== total ? current : Infinity,
});
