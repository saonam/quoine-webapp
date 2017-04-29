import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

const SignInBackButton = ({ onBack }) => (
  <Button styleName="inverse-light inline" onClick={onBack}>
    ← {translate('sign-in:back')}
  </Button>
);

SignInBackButton.propTypes = {
  onBack: PropTypes.func.isRequired,
};

export default SignInBackButton;
