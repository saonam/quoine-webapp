import React from 'react';

import Expander from '@quoine/components/Expander';
import Overview from './Overview';
import Detail from './Detail';

const PositionItemVerticalDefault = ({ position, isQuoineJapan }) => (
  <Expander
    Overview={Overview} Detail={Detail}
    position={position} isQuoineJapan={isQuoineJapan}
  />
);

PositionItemVerticalDefault.propTypes = {
  position: React.PropTypes.shape({}).isRequired,
  isQuoineJapan: React.PropTypes.bool.isRequired,
};

export default PositionItemVerticalDefault;
