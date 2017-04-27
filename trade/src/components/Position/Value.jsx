import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';

const PositionValue = ({ position }) => (
  <Money value={position.value} currency={position.account} />
);

PositionValue.propTypes = {
  position: PropTypes.shape({
    value: PropTypes.number.isRequired,
    account: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionValue;
