import PropTypes from 'prop-types';
import React from 'react';

import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';

const ChartsHeaderToggleDouble = ({ double, onToggleDouble }) => (
  <div>
    <Button
      styleName={double ? 'primary-3' : 'accent'}
      onClick={onToggleDouble}
      disabled={!double}
    >
      <Icon glyph="charts-single" />
    </Button>
    <Button
      styleName={!double ? 'primary-3' : 'accent'}
      onClick={onToggleDouble}
      disabled={double}
    >
      <Icon glyph="charts-double" />
    </Button>
  </div>
);

ChartsHeaderToggleDouble.propTypes = {
  double: PropTypes.bool.isRequired,
  onToggleDouble: PropTypes.func.isRequired,
};

export default ChartsHeaderToggleDouble;
