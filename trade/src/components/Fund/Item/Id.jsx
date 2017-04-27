import PropTypes from 'prop-types';
import React from 'react';

const FundItemId = ({ fund }) => (
  <span>{fund.id}</span>
);

FundItemId.propTypes = {
  fund: PropTypes.shape({}).isRequired,
};

export default FundItemId;
