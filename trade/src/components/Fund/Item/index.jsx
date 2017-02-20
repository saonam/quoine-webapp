import React from 'react';

import Expander from '@quoine/components/Expander';

import Overview from './Overview';
import DetailBank from './Detail/Bank';
import DetailCash from './Detail/Cash';

const FundItem = ({ fund }) => (
  <Expander
    Overview={Overview}
    Detail={fund.method === 'cash' ? DetailCash : DetailBank}
    fund={fund}
  />
);

FundItem.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItem;
