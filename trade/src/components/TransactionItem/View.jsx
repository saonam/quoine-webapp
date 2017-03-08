import React from 'react';

import Expander from '@quoine/components/Expander';
import Overview from 'components/TransactionItem/Overview';
import Detail from 'components/TransactionItem/Detail';

const TransactionItem = ({ trans }) => (
  <Expander Overview={Overview} Detail={Detail} trans={trans} />
);

TransactionItem.propTypes = {
  trans: React.PropTypes.shape({}).isRequired,
};

export default TransactionItem;
