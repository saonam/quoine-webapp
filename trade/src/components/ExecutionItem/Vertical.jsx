import React from 'react';

import Expander from '@quoine/components/Expander';
import Overview from 'components/ExecutionItem/Overview';
import Detail from 'components/ExecutionItem/Detail';

const ExecutionItem = ({ execution }) => (
  <Expander Overview={Overview} Detail={Detail} execution={execution} />
);

ExecutionItem.propTypes = {
  execution: React.PropTypes.shape({}).isRequired,
};

export default ExecutionItem;
