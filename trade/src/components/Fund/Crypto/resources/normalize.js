export default (raw, account) => {
  const cryptoAcc = raw.crypto_accounts.find(
    item => item.currency === account
  );
  const info = cryptoAcc.address;

  if (account === 'XMR') {
    const [address, paymentId] = info.split(',');
    return ({ address, paymentId });
  }

  if (account === 'XEM') {
    const [address, message] = info.split(',');
    return ({ address, message });
  }

  if (account === 'XLM') {
    const [address, ...memos] = info.split(',');
    const memoText = memos[0].substring('memo_text:'.length);
    const memoId = memos[1].substring('memo_id:'.length);
    const memoHash = memos[2].substring('memo_hash:'.length);
    return ({
      address,
      memoText,
      memoId,
      memoHash,
    });
  }

  // other crypto currencies
  return { address: info };
};
