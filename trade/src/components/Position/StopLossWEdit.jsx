import React from 'react';

import { StopLoss, Edit } from 'components/Position';

const PositionStopLossWEdit = ({ position, layout }) => (
  <Edit
    Element={StopLoss}
    position={position}
    target="stopLoss"
    layout={layout}
  />
);

PositionStopLossWEdit.propTypes = {
  position: React.PropTypes.shape({}).isRequired,
  layout: React.PropTypes.string.isRequired,
};

export default PositionStopLossWEdit;
