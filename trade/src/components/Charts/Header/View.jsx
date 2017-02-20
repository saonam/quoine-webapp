import React from 'react';

import Header from '@quoine/components/Header';
import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';

const ChartsHeader = ({ double, onToggle }) => (
  <Header styleName="hor-small">
    <Button
      styleName={double ? 'primary-3' : 'accent'}
      onClick={onToggle}
      disabled={!double}
    >
      <Icon glyph="charts-single" />
    </Button>
    <Button
      styleName={!double ? 'primary-3' : 'accent'}
      onClick={onToggle}
      disabled={double}
    >
      <Icon glyph="charts-double" />
    </Button>
  </Header>
);

ChartsHeader.propTypes = {
  double: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func.isRequired,
};

export default ChartsHeader;
