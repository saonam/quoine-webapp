import React from 'react';

import Loading from '@quoine/components/LoadingIconWrapper';
import Message from '../Message';

import validate from './validate';

const TransferBody = ({ user, account, type, Element }) => {
  if (!user.id) {
    return (<Loading />);
  }

  // ===
  const message = validate({ user, account, type });
  if (message) {
    return (<Message message={message} />);
  }

  // ===
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
  // ===
  type: React.PropTypes.oneOf(['fund', 'withdrawal']).isRequired,
  Element: React.PropTypes.func.isRequired,
};

export default TransferBody;
