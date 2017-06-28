const bankAccount = (raw) => (
  raw.bank_account ? ({
    bank: raw.bank_account.bank,
    accNumber: raw.bank_account.acc_number,
  }) : null
);

const response = (raw) => ({
  id: raw.id,
  account: raw.currency,
  type: raw.type,
  amount: Number(raw.amount),
  status: raw.state ? raw.state.split('_').join('-') : raw.state,
  createdAt: raw.created_at,
  bankAccount: bankAccount(raw),
  address: raw.address,
  paymentId: raw.currency === 'XMR' ? raw.payment_id : '',
  message: raw.currency === 'XEM' ? raw.payment_id : '',
  destinationTag: raw.currency === 'XRP' ? raw.payment_id : '',
});

export default response;
