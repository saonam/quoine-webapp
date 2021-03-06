import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import TFARequest from '@quoine/components/TFARequest';

import LargeField from 'components/LargeField';

import styles from './styles.css';

const SignInBody2 = ({ form, onChange }) => (
  <div>
    <p className={styles.description}>
      {translate('sign-in:code-description')}
    </p>
    <div className={styles.input}>
      <LargeField label={translate('sign-in:code')}>
        <TextInput
          value={form.code} onChange={onChange.code}
          autoFocus border={2} required
        />
      </LargeField>
    </div>
    <div className={styles.button}>
      <TFARequest
        payload={{ email: form.email, password: form.password }}
      />
    </div>
  </div>
);

SignInBody2.propTypes = {
  form: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.shape({
    email: PropTypes.func.isRequired,
    password: PropTypes.func.isRequired,
  }),
};

export default SignInBody2;
