import PropTypes from 'prop-types';
import React from 'react';

import Time from '@quoine/components/Time';

const PositionUpdated = ({ position }) => (
  <Time value={position.updatedAt} type="time" />
);

PositionUpdated.propTypes = {
  position: PropTypes.shape({
    updatedAt: PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionUpdated;
