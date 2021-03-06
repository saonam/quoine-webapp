import PropTypes from 'prop-types';
import React from 'react';

import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';

const ThemeButton = ({ onOpen }) => (
  <Button styleName="primary-3" onClick={onOpen} >
    <Icon glyph="moon" />
  </Button>
);

ThemeButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default ThemeButton;
