import React from 'react';

import Loading from '@quoine/components/LoadingIconWrapper';
import Message from './Message';

const TransferMsgWrapper = ({ user, account, Content }) => {
  if (!user.id) {
    return (<Loading />);
  }
  if (
    (user.status !== 'approved' && account.fundType === 'fiat')
    || (user.status !== 'approved' && user.vendorId === process.env.REACT_APP_QUOINEJP_ID)
  ) {
    return (<Message status={user.status} />);
  }
  return (
    <Content account={account} />
  );
};

TransferMsgWrapper.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
  account: React.PropTypes.shape({
    fundType: React.PropTypes.string.isRequired,
  }).isRequired,
  Content: React.PropTypes.func.isRequired,
};

export default TransferMsgWrapper;
