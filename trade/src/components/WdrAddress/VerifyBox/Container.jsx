import PropTypes from 'prop-types';
import React from 'react';

import FormWrapper from '@quoine/components/FormWrapper';
import View from './View';

const initialForm = {
  token: '',
};

const WdrAddressVerify = (props) => (
  <FormWrapper
    Element={View}
    initialForm={initialForm}
    onSubmit={props.onSubmit}
    busy={props.submitting === 'verify'}
    success={props.success}
    error={props.error}
    onDismiss={props.onDismiss}
  />
);

WdrAddressVerify.propTypes = {
  submitting: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  success: View.propTypes.success,
  error: View.propTypes.error,
  onSubmit: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default WdrAddressVerify;
