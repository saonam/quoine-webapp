import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import FormInline from '@quoine/components/FormInline';
import TextInput from '@quoine/components/TextInput';

import Field from '@quoine/components/Field';

import styles from './styles.css';

const ChangePasswordFormView = (props) => (
  <FormInline
    onSubmit={props.onSubmit}
    submitLabel={translate('change-password:action-submit')}
    onCancel={props.onCancel}
    // ===
    busy={props.busy}
    success={props.success ? translate('change-password:success') : ''}
    error={props.error ? translate(props.error) : ''}
  >
    <div className={styles.input}>
      <Field label={translate('change-password:input-current')} layout="inline">
        <TextInput
          type="password" value={props.current}
          onChange={props.onCurrentChange}
          autoFocus border
        />
      </Field>
    </div>
    <div className={styles.input}>
      <Field label={translate('change-password:input-next')} layout="inline">
        <TextInput
          type="password" value={props.next}
          onChange={props.onNextChange} border
        />
      </Field>
    </div>
  </FormInline>
);

ChangePasswordFormView.propTypes = {
  current: PropTypes.string.isRequired,
  onCurrentChange: PropTypes.func.isRequired,
  next: PropTypes.string.isRequired,
  onNextChange: PropTypes.func.isRequired,
  // ===
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default ChangePasswordFormView;
