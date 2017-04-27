import PropTypes from 'prop-types';
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
  onDismiss: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  position: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionErrBoxView;
