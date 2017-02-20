import React from 'react';

const FundItemBank = ({ fund }) => (
  <span>{fund.bank}</span>
);

FundItemBank.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItemBank;
