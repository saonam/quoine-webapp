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
  onDismiss: React.PropTypes.func.isRequired,
  message: React.PropTypes.string.isRequired,
};

export default PositionCloseErr;
