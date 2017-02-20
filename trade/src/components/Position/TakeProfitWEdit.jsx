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
  position: React.PropTypes.shape({}).isRequired,
  layout: React.PropTypes.string.isRequired,
};

export default PositionTakeProfitWEdit;
