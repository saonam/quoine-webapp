import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import FormInline from '@quoine/components/FormInline';
import Field from '@quoine/components/Field';
import TextInput from '@quoine/components/TextInput';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from './styles.css';

const TFAToggleFormView = ({
  app, action, form, onChange,
  onSubmit, onCancel, busy, error,
  Request,
}) => (
  <div>
    <FormInline
      description={translate(`tfa-manage:form-${app}-description`)}
      // ===
      onSubmit={onSubmit}
      submitLabel={translate(`tfa-manage:action-${action}`)}
      onCancel={onCancel}
      // ===
      busy={busy}
      error={error ? translate(error.message) : ''}
    >
      <div className={styles.input}>
        <Field label={translate('tfa-manage:form-input')} layout="inline">
          <TextInput
            value={form.code} onChange={onChange.code}
            autoFocus border required
          />
        </Field>
      </div>
    </FormInline>
    {Request ? (<Request />) : null}
  </div>
);

TFAToggleFormView.propTypes = {
  app: PropTypes.oneOf(['authy', 'ga']).isRequired,
  action: PropTypes.oneOf(['enable', 'disable']).isRequired,
  ...FormWrapperPropTypes.propTypes,
};

export default TFAToggleFormView;
