const one = ({ raw, userId }) => {
  const quantity = Number(raw.quantity);
  const rate = Number(raw.rate);

  return ({
    id: raw.id,
    currency: raw.currency,
    // ==
    quantity,
    createdAt: raw.created_at,
    interestEarned: quantity * rate,
    status: raw.status,
    rate,
    canReinvest: raw.lender_id === userId,
    reinvest: raw.fund_reloaned,
  });
};

const all = ({ raw, userId }) => ({
  current: Number(raw.current_page),
  total: Number(raw.total_pages),
  models: raw.models.map(item => (
    one({ raw: item, userId })
  )),
});

const reinvest = (value) => ({
  loan: {
    fund_reloaned: value,
  },
});

export default { one, all, reinvest };
