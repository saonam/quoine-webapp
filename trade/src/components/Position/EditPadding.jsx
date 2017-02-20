import React from 'react';

import IconPadding from '@quoine/components/IconPadding';

const PositionEditPadding = ({ position }) => (
  position.status === 'open' ? null : <IconPadding />
);

PositionEditPadding.propTypes = {
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionEditPadding;
