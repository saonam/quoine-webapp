export default (raw, account) => {
  const cryptoAcc = raw.crypto_accounts.find(
    item => item.currency === account
  );
  return cryptoAcc.address;
};
