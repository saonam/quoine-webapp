import PropTypes from 'prop-types';
import React from 'react';

import FormWrapper from '@quoine/components/FormWrapper';

import View from './View';

const initialForm = {
  address: '',
  currency: '',
  id: '',
  status: '',
  authCode: '',
};

const WdrAddressForm = ({
  editting, submitting, success, error,
  action, onSubmit, onDismiss,
}) => (
  <FormWrapper
    Element={View}
    initialForm={action === 'edit' ? editting.form : initialForm}
    onSubmit={onSubmit}
    // pass along ===
    action={action}
    busy={submitting === action}
    success={success}
    error={error}
    onDismiss={onDismiss}
  />
);

WdrAddressForm.propTypes = {
  action: View.propTypes.action,
  // ===
  editting: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
  submitting: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  success: View.propTypes.success,
  error: View.propTypes.error,
  // ===
  onSubmit: View.propTypes.onSubmit,
  onDismiss: PropTypes.func.isRequired,
};

export default WdrAddressForm;
