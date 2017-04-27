import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';

const FundItemAmount = ({ fund }) => (
  <Money currency={fund.account} value={fund.amount} />
);

FundItemAmount.propTypes = {
  fund: PropTypes.shape({}).isRequired,
};

export default FundItemAmount;
