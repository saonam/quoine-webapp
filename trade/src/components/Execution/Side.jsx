import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ColorBySide from '@quoine/components/ColorBySide';

const ExecutionSide = ({ execution }) => (
  <ColorBySide side={execution.side}>
    {translate(`execution:side-${execution.side}`)}
  </ColorBySide>
);

ExecutionSide.propTypes = {
  execution: PropTypes.shape({
    side: PropTypes.string.isRequired,
  }).isRequired,
};

export default ExecutionSide;
