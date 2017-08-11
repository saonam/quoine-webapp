const getType = (raw, isIn) => {
  if (raw.transaction_type === 'trade') {
    return isIn ? 'bought' : 'sold';
  }
  const result = raw.transaction_type.replace(/_/g, '-');
  return result;
};

const one = (raw, account) => {
  const isIn =
    raw.to_account_id === account.id ||
    raw.to_fiat_account_id === account.id;
  return ({
    id: raw.id,
    type: getType(raw, isIn),
    direction: isIn ? 'in' : 'out',
    account: account.currency,
    createdAt: raw.created_at,
    quantityGross: Number(raw.gross_amount),
    quantityNet: Number(raw.net_amount),
    businessDate: raw.business_date,
    notes: raw.notes,
    // ===
    // execution is in notes
    // fx rate is in notes
    // ===
    loan: raw.loan ? {
      account: raw.loan.currency,
      quantity: Number(raw.loan.quantity),
      rate: Number(raw.loan.rate),
    } : null,
    // fiat
    fee: raw.fee,
    // crypto
    state: raw.state,
    feeExchange: raw.exchange_fee,
    feeNetwork: raw.network_fee,
    hash: raw.transaction_hash,
  });
};

const all = (raw, account) => {
  const { models, current_page: current, total_pages: total } = raw;
  return {
    models: models.map(tran => one(tran, account)),
    page: current !== total ? current : Infinity,
  };
};

export default { one, all };
