import React from 'react';

import Expander from '@quoine/components/Expander';
import Overview from './Overview';
import Detail from './Detail';

const PositionItemVerticalDefault = ({ position }) => (
  <Expander Overview={Overview} Detail={Detail} position={position} />
);

PositionItemVerticalDefault.propTypes = {
  position: React.PropTypes.shape({}).isRequired,
};

export default PositionItemVerticalDefault;
