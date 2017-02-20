import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import TFARequest from '@quoine/components/TFARequest';

import styles from './styles.css';

const SignInBody2 = ({ form, onChange }) => (
  <div>
    <p className={styles.tfaText}>
      {translate('sign-in:code-description')}
    </p>
    <div className={styles.tfaInput}>
      <Input large id="code" label={translate('sign-in:code')}>
        <TextBox
          type="text" value={form.code} onChange={onChange.code} autoFocus
        />
      </Input>
    </div>
    <div className={styles.tfaRequest}>
      <TFARequest
        payload={{ email: form.email, password: form.password }}
      />
    </div>
  </div>
);

SignInBody2.propTypes = {
  form: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.shape({
    email: React.PropTypes.func.isRequired,
    password: React.PropTypes.func.isRequired,
  }),
};

export default SignInBody2;
