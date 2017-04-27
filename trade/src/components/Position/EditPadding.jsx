import PropTypes from 'prop-types';
import React from 'react';

import IconPadding from '@quoine/components/IconPadding';

const PositionEditPadding = ({ position }) => (
  position.status === 'open' ? null : <IconPadding />
);

PositionEditPadding.propTypes = {
  position: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionEditPadding;
