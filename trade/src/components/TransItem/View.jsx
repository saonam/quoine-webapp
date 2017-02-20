import React from 'react';

import Expander from '@quoine/components/Expander';
import Overview from 'components/TransItem/Overview';
import Detail from 'components/TransItem/Detail';

const TransItem = ({ trans }) => (
  <Expander Overview={Overview} Detail={Detail} trans={trans} />
);

TransItem.propTypes = {
  trans: React.PropTypes.shape({}).isRequired,
};

export default TransItem;
