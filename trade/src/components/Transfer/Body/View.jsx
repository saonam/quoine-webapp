import React from 'react';

import Loading from '@quoine/components/LoadingIconWrapper';
import Message from '../Message';

const acceptableTradersAccs = ['BTC', 'ETH', 'JPY'];
const isLimitInTraders = (account) => (
  process.env.REACT_APP_VENDOR === 'traders' &&
  acceptableTradersAccs.indexOf(account.currency) === -1
);

const TransferBody = ({ user, account, Element }) => {
  if (!user.id) {
    return (<Loading />);
  }
  if (isLimitInTraders(account)) {
    return (<Message status="not-allow-in-traders" />);
  }
  if (
    (user.status !== 'approved' && account.fundType === 'fiat')
    || (user.status !== 'approved' && user.vendorId === process.env.REACT_APP_QUOINEJP_ID)
  ) {
    return (<Message status={user.status} />);
  }
  return (
    <Element account={account} />
  );
};

TransferBody.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
  account: React.PropTypes.shape({
    currency: React.PropTypes.string.isRequired,
    fundType: React.PropTypes.string.isRequired,
  }).isRequired,
  Element: React.PropTypes.func.isRequired,
};

export default TransferBody;
