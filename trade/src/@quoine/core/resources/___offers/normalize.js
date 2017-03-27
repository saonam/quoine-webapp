const getLoanedOutPercent = (raw) => {
  const quantity = Number(raw.quantity);
  const loanedOut = Number(raw.filled_quantity);
  if (quantity) {
    return loanedOut / quantity;
  }
  return 0;
};

const one = (raw) => ({
  id: raw.id,
  currency: raw.currency,
  // ===
  quantity: Number(raw.quantity),
  loanedOut: Number(raw.filled_quantity),
  loanedOutPercent: getLoanedOutPercent(raw),
  rate: Number(raw.rate),
  status: raw.status,
});

const all = (raw) => ({
  current: Number(raw.current_page),
  total: Number(raw.total_pages),
  models: raw.models.map(one),
});

const body = ({ account, rate, quantity }) => ({
  loan_bid: {
    currency: account,
    rate: rate / 100,
    quantity
  },
});

export default { one, all, body };
