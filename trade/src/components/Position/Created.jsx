import PropTypes from 'prop-types';
import React from 'react';

import Time from '@quoine/components/Time';

const PositionCreated = ({ position }) => (
  <Time value={position.createdAt} type="time" />
);

PositionCreated.propTypes = {
  position: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionCreated;
