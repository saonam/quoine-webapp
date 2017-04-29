import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

const SignInSubmitButton = ({ busy }) => (
  <ButtonWLoading
    type="submit" busy={busy} styleName="modal accent"
  >
    {translate('sign-in:action')}
  </ButtonWLoading>
);

SignInSubmitButton.propTypes = {
  busy: PropTypes.bool.isRequired,
};

export default SignInSubmitButton;
