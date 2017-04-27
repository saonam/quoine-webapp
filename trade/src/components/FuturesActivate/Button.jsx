import PropTypes from 'prop-types';
import React from 'react';

import t from '@quoine/translate';

import Button from '@quoine/components/Button';

const FuturesActivateButton = ({ onOpen }) => (
  <Button styleName="text inline primary-3" onClick={onOpen}>
    {t('market:futures')}
  </Button>
);

FuturesActivateButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default FuturesActivateButton;
