import { addBaseQuote } from '@quoine/states/utils';

const one = (raw) => ({
  ...addBaseQuote(raw),
  id: Number(raw.id),
  type: raw.order_type.replace('_', '-'),
  quantity: Number(raw.quantity),
  quantityDisclose: Number(raw.disc_quantity),
  quantityFilled: Number(raw.filled_quantity),
  side: raw.side,
  price: Number(raw.price),
  priceAverage: Number(raw.average_price),
  createdAt: Number(raw.created_at),
  updatedAt: Number(raw.updated_at),
  status: raw.status,
  leverage: Number(raw.leverage_level),
  // ===
  account: raw.funding_currency,
  product: raw.currency_pair_code,
  market: raw.target === 'spot' ? 'spot' : 'margin',
  // ===
  target: raw.target,
  marginUsed: Number(raw.margin_used),
  marginInterest: Number(raw.margin_interest),
  leverageUnwound: Number(raw.unwound_trade_leverage_level),
});

const all = ({
  models, current_page: current, total_pages: total,
}) => ({
  models: models.map(one),
  page: current !== total ? current : Infinity,
});

export default { one, all };
