import React from 'react';

const FundItemId = ({ fund }) => (
  <span>{fund.id}</span>
);

FundItemId.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItemId;
