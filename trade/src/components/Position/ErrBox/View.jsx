import React from 'react';

import ErrWrapper from '@quoine/components/ErrWrapper';

const PositionErrBoxView = ({ onDismiss, error, position }) => (
  error && error.id === position.id ? (
    <ErrWrapper
      onDismiss={onDismiss}
      layout="box"
      message={error.message}
    />
  ) : null
);

PositionErrBoxView.propTypes = {
  onDismiss: React.PropTypes.func.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  position: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionErrBoxView;
