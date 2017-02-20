import { addBaseQuote } from '@quoine/states/utils';

export const summary = ({ id, open_pnl, close_price }) => ({
  id,
  pnlOpen: Number(open_pnl),
  priceClose: Number(close_price),
});

export const one = (raw) => ({
  ...addBaseQuote(raw),
  id: raw.id,
  account: raw.funding_currency,
  product: raw.currency_pair_code,
  // ===
  status: raw.status,
  side: raw.side,
  margin: Number(raw.margin_used),
  leverage: raw.leverage_level,
  createdAt: raw.created_at,
  updatedAt: raw.updated_at,
  stopLoss: Number(raw.stop_loss),
  takeProfit: Number(raw.take_profit),
  // ===
  quantityOpen: Number(raw.open_quantity),
  quantityClose: Number(raw.close_quantity),
  // ===
  priceOpen: Number(raw.open_price),
  priceClose: Number(raw.close_price),
  // ===
  pnlOpen: Number(raw.open_pnl),
  pnlClose: Number(raw.close_pnl),
  // ===
  interestTotal: Number(raw.total_interest),
  interestDaily: Number(raw.daily_interest),
  // ===
  feeTotal: Number(raw.total_fee),
  feeClose: Number(raw.close_fee),
});

export const all = ({
  models, current_page: current, total_pages: total,
}) => ({
  models: models.map(one),
  page: current !== total ? current : Infinity,
});

export const multiple = (raw) => raw.map(one);
