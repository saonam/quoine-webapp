import PropTypes from 'prop-types';
import React from 'react';

import FormWrapper from '@quoine/components/FormWrapper';

import View from './View';

const initialForm = {
  'bank-name': '',
  'bank-branch': '',
  'bank-address': '',
  'bank-swift': '',
  'account-name': '',
  'account-number': '',
  country: '',
  reason: '',
  document: null,
  'joint-account': false,
  'joint-account-name': '',
  'joint-address': '',
  'joint-city': '',
  'joint-country': '',
  'joint-document-address': null,
  'joint-document-id': null,
};

const WdrBankForm = ({
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

WdrBankForm.propTypes = {
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

export default WdrBankForm;
