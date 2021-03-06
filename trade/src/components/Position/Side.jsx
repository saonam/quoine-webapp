import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ColorBySide from '@quoine/components/ColorBySide';

const PositionSide = ({ position }) => (
  <ColorBySide side={position.side}>
    {translate(`position:side-${position.side}`)}
  </ColorBySide>
);

PositionSide.propTypes = {
  position: PropTypes.shape({
    side: PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionSide;
