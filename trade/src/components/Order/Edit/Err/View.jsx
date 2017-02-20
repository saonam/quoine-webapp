import React from 'react';

import ErrWrapper from '@quoine/components/ErrWrapper';

const OrderEditErr = ({ onDismiss, message }) => (
  <ErrWrapper onDismiss={onDismiss} layout="inline" message={message} />
);

OrderEditErr.propTypes = {
  onDismiss: React.PropTypes.func.isRequired,
  message: React.PropTypes.string.isRequired,
};

export default OrderEditErr;
