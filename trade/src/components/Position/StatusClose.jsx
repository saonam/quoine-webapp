import React from 'react';

import Color from '@quoine/components/Color';

import { Close, Status } from 'components/Position';

const PositionStatusClose = ({ position, ...others }) => (
  position.status === 'open' ? (
    <Close position={position} {...others} />
  ) : (
    <Color styleName="primary-3">
      <Status position={position} />
    </Color>
  )
);

PositionStatusClose.propTypes = {
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionStatusClose;
