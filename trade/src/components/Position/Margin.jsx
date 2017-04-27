import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';

const PositionMargin = ({ position }) => (
  <Money value={position.margin} currency={position.account} />
);

PositionMargin.propTypes = {
  position: PropTypes.shape({
    margin: PropTypes.number.isRequired,
    account: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionMargin;
