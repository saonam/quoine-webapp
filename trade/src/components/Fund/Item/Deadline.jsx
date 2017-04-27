import PropTypes from 'prop-types';
import React from 'react';

import Time from '@quoine/components/Time';

const FundItemDeadline = ({ fund }) => (
  <Time value={fund.deadline} type="full" />
);

FundItemDeadline.propTypes = {
  fund: PropTypes.shape({}).isRequired,
};

export default FundItemDeadline;
