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
  status: raw.state,
  createdAt: raw.created_at,
  bankAccount: bankAccount(raw),
  address: raw.address,
});

export default response;
