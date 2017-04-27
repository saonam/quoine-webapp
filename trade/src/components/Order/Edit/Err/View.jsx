import PropTypes from 'prop-types';
import React from 'react';

import ErrWrapper from '@quoine/components/ErrWrapper';

const OrderEditErr = ({ onDismiss, message }) => (
  <ErrWrapper onDismiss={onDismiss} layout="inline" message={message} />
);

OrderEditErr.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default OrderEditErr;
