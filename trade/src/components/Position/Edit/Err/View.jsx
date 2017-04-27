import PropTypes from 'prop-types';
import React from 'react';

import ErrWrapper from '@quoine/components/ErrWrapper';

const PositionEditErr = ({ onDismiss, message }) => (
  <ErrWrapper
    onDismiss={onDismiss}
    layout="inline"
    message={message}
  />
);

PositionEditErr.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default PositionEditErr;
