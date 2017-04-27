import PropTypes from 'prop-types';
import React from 'react';

import ErrWrapper from '@quoine/components/ErrWrapper';

const PositionCloseErr = ({ onDismiss, message }) => (
  <ErrWrapper
    onDismiss={onDismiss}
    layout="inline"
    message={message}
  />
);

PositionCloseErr.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default PositionCloseErr;
