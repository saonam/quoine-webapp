import React from 'react';

import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';

const LayoutSelectOpen = ({ onOpen }) => (
  <Button styleName="primary-3" onClick={onOpen} >
    <Icon glyph="layout" />
  </Button>
);

LayoutSelectOpen.propTypes = {
  onOpen: React.PropTypes.func.isRequired,
};

export default LayoutSelectOpen;
