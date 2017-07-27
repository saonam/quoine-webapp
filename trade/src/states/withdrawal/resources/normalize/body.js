const fiatBody = ({ code, account, bank, quantity, INRTransfer }) => {
  const withdrawal = {
    bank_account_id: bank,
    amount: quantity,
    currency: account,
  };
  if (account === 'INR') {
    withdrawal.transfer_type = INRTransfer;
  }
  return {
    auth_code: code,
    withdrawal,
  };
};

const cryptoBody = (payload) => {
  const {
    code, account, address, quantity, paymentId, message, destinationTag,
  } = payload;

  const withdrawal = {
    address: process.env.REACT_APP_VENDOR === 'quoine' ? address.value.trim() : address.trim(),
    amount: quantity,
    currency: account,
  };
  if (account === 'XMR') {
    withdrawal.payment_id = paymentId;
  }
  if (account === 'XEM') {
    // payment_id for 'XEM' use label in UI is 'Message'
    withdrawal.payment_id = message;
  }
  if (account === 'XRP') {
    // payment_id for 'XRP' use label in UI is 'Destination Tag'
    withdrawal.payment_id = destinationTag;
  }

  return ({
    auth_code: code,
    crypto_withdrawal: withdrawal,
  });
};

const body = (form) => (
  form.type === 'fiat' ? fiatBody(form) : cryptoBody(form)
);

export default body;
