import { addBaseQuote } from '@quoine/states/utils';

const one = (raw, product) => ({
  ...addBaseQuote({ currency_pair_code: product }),
  id: raw.id,
  product,
  quantity: Number(raw.quantity),
  price: Number(raw.price),
  takerSide: raw.taker_side,
  createdAt: Number(raw.created_at),
});

const all = (raw, product) => (
  raw.models.map(model => one(model, product))
);

export default { one, all };
