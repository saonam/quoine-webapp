const acceptableTradersAccs = ['BTC', 'ETH', 'JPY'];
const isLimitInTraders = (account) => (
  process.env.REACT_APP_VENDOR === 'traders' &&
  acceptableTradersAccs.indexOf(account.currency) === -1
);

const isLimitInQuoine = ({ type, user }) => (
  process.env.REACT_APP_VENDOR === 'quoine' &&
  type === 'withdrawal' &&
  !user.tfa
);

const isDisable = ({ user, account }) => (
  (user.status !== 'approved' && account.fundType === 'fiat') ||
  (user.status !== 'approved' && user.vendorId === process.env.REACT_APP_QUOINEJP_ID)
);

const validate = ({ user, account, type }) => {
  if (isLimitInTraders(account)) {
    return {
      key: 'limit-accounts',
      style: 'negative',
      goto: false,
    };
  }

  if (isLimitInQuoine({ type, user })) {
    return {
      key: 'need-tfa',
      style: 'negative',
      goto: 'security',
    };
  }

  if (isDisable({ user, account })) {
    return {
      key: user.status,
      style: user.status === 'documents-submitted' ? 'positive' : 'negative',
      goto: 'profile',
    };
  }

  return false;
};

export default validate;
