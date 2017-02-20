import React from 'react';
import translate from '@quoine/translate';

const FundItemStatus = ({ fund }) => (
  <span>
    {translate(`fund:${fund.status}`)}
  </span>
);

FundItemStatus.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItemStatus;
