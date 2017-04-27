import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Icon from '@quoine/components/Icon';
import Button from '@quoine/components/Button';

const activateZendesk = () => (
  window.zE.activate()
);

const HelpButton = ({ isIcon }) => (
  <Button
    onClick={activateZendesk}
    styleName={isIcon ? 'primary-3' : ''}
  >
    {isIcon ? '' : `${translate('menu:support')} `}
    <Icon glyph="help" />
  </Button>
);

HelpButton.propTypes = {
  isIcon: PropTypes.bool,
};

export default HelpButton;
