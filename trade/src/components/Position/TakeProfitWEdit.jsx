import PropTypes from 'prop-types';
import React from 'react';

import { TakeProfit, Edit } from 'components/Position';

const PositionTakeProfitWEdit = ({ position, layout }) => (
  <Edit
    Element={TakeProfit}
    position={position}
    target="takeProfit"
    layout={layout}
  />
);

PositionTakeProfitWEdit.propTypes = {
  position: PropTypes.shape({}).isRequired,
  layout: PropTypes.string.isRequired,
};

export default PositionTakeProfitWEdit;
