import React from 'react';

import Expander from '@quoine/components/Expander';
import Overview from './Overview';
import Detail from './Detail';

const PositionItemVerticalDefault = ({ position, underJFSA }) => (
  <Expander
    Overview={Overview} Detail={Detail}
    position={position} underJFSA={underJFSA}
  />
);

PositionItemVerticalDefault.propTypes = {
  position: React.PropTypes.shape({}).isRequired,
  underJFSA: React.PropTypes.bool.isRequired,
};

export default PositionItemVerticalDefault;
