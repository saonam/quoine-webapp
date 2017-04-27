import PropTypes from 'prop-types';
import React from 'react';

const WdrItemAddress = ({ withdrawal }) => (
  <span>{withdrawal.address}</span>
);

WdrItemAddress.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
};

export default WdrItemAddress;
