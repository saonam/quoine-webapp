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
  onDismiss: React.PropTypes.func.isRequired,
  message: React.PropTypes.string.isRequired,
};

export default PositionEditErr;
