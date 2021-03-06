import PropTypes from 'prop-types';
import React from 'react';

import Time from '@quoine/components/Time';

const FundItemTime = ({ fund, type }) => (
  <Time value={fund.createdAt} type={type} />
);

FundItemTime.propTypes = {
  fund: PropTypes.shape({}).isRequired,
  type: Time.propTypes.type,
};

export default FundItemTime;
