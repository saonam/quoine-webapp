import React from 'react';

import translate from '@quoine/translate';

import Icon from '../Icon';
import Button from '../Button';

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
  isIcon: React.PropTypes.bool,
};

export default HelpButton;
