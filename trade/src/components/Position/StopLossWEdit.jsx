import PropTypes from 'prop-types';
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
  position: PropTypes.shape({}).isRequired,
  layout: PropTypes.string.isRequired,
};

export default PositionStopLossWEdit;
