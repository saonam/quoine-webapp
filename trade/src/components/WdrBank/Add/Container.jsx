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

const WdrBankAdd = ({ busy, success, error, onSubmit, onDismiss }) => (
  <FormWrapper
    Element={View}
    initialForm={initialForm}
    onSubmit={onSubmit}
    // pass along ===
    busy={busy}
    success={success}
    error={error}
    onDismiss={onDismiss}
  />
);

WdrBankAdd.propTypes = {
  busy: View.propTypes.busy,
  success: View.propTypes.success,
  error: View.propTypes.error,
  onSubmit: View.propTypes.onSubmit,
  onDismiss: React.PropTypes.func.isRequired,
};

export default WdrBankAdd;
