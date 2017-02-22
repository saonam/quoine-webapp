import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import Link from '@quoine/components/Link';

import DemoLink from '../DemoLink';
import SignUpLink from '../SignUpLink';

import styles from './styles.css';

import getMessageKey from './getMessageKey';

const SignInBody1 = ({ form, onChange, message }) => (
  <div>
    {message ? (
      <p className={styles.message}>
        {translate(getMessageKey(message))}
      </p>
    ) : null}
    <div className={styles.input}>
      <Input large id="email" label={translate('sign-in:email')}>
        <TextBox
          type="email" value={form.email} onChange={onChange.email} autoFocus
        />
      </Input>
    </div>
    <div className={styles.subInput}>
      <span>{translate('sign-in:new-text')} </span>
      <SignUpLink tabIndex="-1" />
      {process.env.REACT_APP_VENDOR !== 'traders' ? (
        <span>
          <span> {translate('sign-in:new-or')} </span>
          <DemoLink tabIndex="-1" />
        </span>
      ) : null}
    </div>
    <div className={styles.input}>
      <Input large id="password" label={translate('sign-in:password')}>
        <TextBox
          type="password" value={form.password} onChange={onChange.password}
        />
      </Input>
    </div>
    <div className={styles.subInput}>
      <Link
        styleName="accent text" pathname="/forgot-password" tabIndex="-1"
      >
        {translate('forgot-password:title')}
      </Link>
    </div>
  </div>
);

SignInBody1.propTypes = {
  form: React.PropTypes.shape({
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.shape({
    email: React.PropTypes.func.isRequired,
    password: React.PropTypes.func.isRequired,
  }),
  message: React.PropTypes.string,
};

export default SignInBody1;
