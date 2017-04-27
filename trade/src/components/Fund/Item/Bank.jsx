import PropTypes from 'prop-types';
import React from 'react';

const FundItemBank = ({ fund }) => (
  <span>{fund.bank}</span>
);

FundItemBank.propTypes = {
  fund: PropTypes.shape({}).isRequired,
};

export default FundItemBank;
