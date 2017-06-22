// const acceptableTradersAccs = ['BTC', 'ETH', 'JPY'];
// const isLimitInTraders = (account) => (
//   process.env.REACT_APP_VENDOR === 'traders' &&
//   acceptableTradersAccs.indexOf(account.currency) === -1
// );

const isNeedTfa = ({ type, user }) => (
  (process.env.REACT_APP_VENDOR === 'quoine' || process.env.REACT_APP_VENDOR === 'qryptos') &&
  type === 'withdrawal' &&
  !user.tfa
);

const isDisable = ({ user, account }) => (
  (user.status !== 'approved' && account.fundType === 'fiat') ||
  (user.status !== 'approved' && user.underJFSA)
);

const validate = ({ user, account, type }) => {
  if (user.demo) {
    return {
      key: 'disabled-in-demo-mode',
      style: 'negative',
      goto: false,
    };
  }

  if (isDisable({ user, account })) {
    return {
      key: user.status,
      style: user.status === 'documents-submitted' ? 'positive' : 'negative',
      goto: user.status === 'documents-submitted' ? false : 'profile',
    };
  }

  // if (isLimitInTraders(account)) {
  //   return {
  //     key: 'limit-accounts',
  //     style: 'negative',
  //     goto: false,
  //   };
  // }

  if (isNeedTfa({ type, user })) {
    return {
      key: 'need-tfa',
      style: 'negative',
      goto: 'security',
    };
  }

  return false;
};

export default validate;

