import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

const FundItemStatus = ({ fund }) => (
  <span>
    {translate(`fund:status-${fund.status}`)}
  </span>
);

FundItemStatus.propTypes = {
  fund: PropTypes.shape({}).isRequired,
};

export default FundItemStatus;
