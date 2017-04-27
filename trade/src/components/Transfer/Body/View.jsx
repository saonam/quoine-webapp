import PropTypes from 'prop-types';
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
  user: PropTypes.shape({}).isRequired,
  account: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    fundType: PropTypes.string.isRequired,
  }).isRequired,
  // ===
  type: PropTypes.oneOf(['fund', 'withdrawal']).isRequired,
  Element: PropTypes.func.isRequired,
};

export default TransferBody;
