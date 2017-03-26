import React from 'react';

import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';

const NavigationSidebarButton = ({ onOpen }) => (
  <Button styleName="primary-3" onClick={onOpen} >
    <Icon glyph="menu" />
  </Button>
);

NavigationSidebarButton.propTypes = {
  onOpen: React.PropTypes.func.isRequired,
};

export default NavigationSidebarButton;
