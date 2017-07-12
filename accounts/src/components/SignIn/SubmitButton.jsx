import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

const SignInSubmitButton = ({ busy, disabled }) => (
  <ButtonWLoading
    type="submit"
    busy={busy}
    disabled={disabled}
    styleName="modal accent disabled-primary-2"
  >
    {translate('sign-in:action')}
  </ButtonWLoading>
);

SignInSubmitButton.propTypes = {
  busy: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SignInSubmitButton;
