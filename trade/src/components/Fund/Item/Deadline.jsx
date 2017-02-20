import React from 'react';

import Time from '@quoine/components/Time';

const FundItemDeadline = ({ fund }) => (
  <Time value={fund.deadline} type="full" />
);

FundItemDeadline.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItemDeadline;
