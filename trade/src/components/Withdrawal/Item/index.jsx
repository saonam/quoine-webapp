import React from 'react';

import Expander from '@quoine/components/Expander';

import Overview from './Overview';
import Detail from './Detail';

const WdrItem = ({ withdrawal }) => (
  <Expander
    Overview={Overview} Detail={Detail}
    withdrawal={withdrawal}
  />
);

WdrItem.propTypes = {
  withdrawal: React.PropTypes.shape({}).isRequired,
};

export default WdrItem;
