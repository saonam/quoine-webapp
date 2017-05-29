export default (raw, account) => {
  const cryptoAcc = raw.crypto_accounts.find(
    item => item.currency === account
  );
  const address = cryptoAcc.address;

  if (account === 'XMR') {
    const [addressId, paymentId] = address.split(',');
    return ({
      address: addressId,
      paymentId,
    });
  }

  return ({
    address,
    paymentId: '',
  });
};
