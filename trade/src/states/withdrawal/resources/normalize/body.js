const fiatBody = ({ code, account, bank, quantity, INRTransfer }) => {
  const withdrawal = {
    bank_account_id: bank,
    amount: quantity,
    currency: account,
  };
  if (INRTransfer) { withdrawal.transfer_type = INRTransfer; }
  return {
    auth_code: code,
    withdrawal,
  };
};

const cryptoBody = ({ code, account, address, quantity }) => ({
  auth_code: code,
  crypto_withdrawal: {
    address: address.trim(),
    amount: quantity,
    currency: account,
  },
});

const body = (form) => (
  form.type === 'fiat' ? fiatBody(form) : cryptoBody(form)
);

export default body;
