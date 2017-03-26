import React from 'react';

import translate from '@quoine/translate';

import FormInline from '@quoine/components/FormInline';
import TextInput from '@quoine/components/TextInput';

import LargeField from 'components/LargeField';

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
      <LargeField label={translate('change-password:input-current')} layout="inline">
        <TextInput
          type="password" value={props.current}
          onChange={props.onCurrentChange}
          autoFocus border
        />
      </LargeField>
    </div>
    <div className={styles.input}>
      <LargeField label={translate('change-password:input-next')} layout="inline">
        <TextInput
          type="password" value={props.next}
          onChange={props.onNextChange} border
        />
      </LargeField>
    </div>
  </FormInline>
);

ChangePasswordFormView.propTypes = {
  current: React.PropTypes.string.isRequired,
  onCurrentChange: React.PropTypes.func.isRequired,
  next: React.PropTypes.string.isRequired,
  onNextChange: React.PropTypes.func.isRequired,
  // ===
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  busy: React.PropTypes.bool.isRequired,
  success: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
};

export default ChangePasswordFormView;
