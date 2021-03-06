import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';

import LargeField from 'components/LargeField';
import DemoLink from 'components/DemoLink';
import SignUpLink from 'components/SignUpLink';

import styles from './styles.css';

import getMessageKey from './getMessageKey';

const getPasswordHelp = () => ({
  __html: translate('forgot-password:help'),
});

/* eslint-disable react/no-danger */

const SignInBody1 = ({ form, onChange, message, onRef }) => (
  <div>
    {message ? (
      <p className={styles.message}>
        {translate(getMessageKey(message))}
      </p>
    ) : null}

    <div className={styles.item}>
      <LargeField label={translate('sign-in:email')}>
        <TextInput
          type="email" value={form.email} onChange={onChange.email}
          autoFocus border={2} required
        />
      </LargeField>
      <div>
        <span>{translate('sign-in:new-text')} </span>
        <SignUpLink tabIndex="-1" />
        {process.env.REACT_APP_VENDOR !== 'traders' ? (
          <span>
            <span> {translate('sign-in:new-or')} </span>
            <DemoLink tabIndex="-1" />
          </span>
        ) : null}
      </div>
    </div>

    <div className={styles.item}>
      <LargeField label={translate('sign-in:password')}>
        <TextInput
          type="password" value={form.password} onChange={onChange.password}
          border={2} required
        />
      </LargeField>
      <div className={styles.help}>
        <div dangerouslySetInnerHTML={getPasswordHelp()} />
      </div>
    </div>

    <div className={styles.item}>
      <div ref={onRef} />
    </div>

  </div>
);

SignInBody1.propTypes = {
  form: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.shape({
    email: PropTypes.func.isRequired,
    password: PropTypes.func.isRequired,
  }),
  message: PropTypes.string,
  onRef: PropTypes.func.isRequired,
};

export default SignInBody1;
