import PropTypes from 'prop-types';
import React from 'react';

const WdrItemId = ({ withdrawal }) => (
  <span>{withdrawal.id}</span>
);

WdrItemId.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
};

export default WdrItemId;
