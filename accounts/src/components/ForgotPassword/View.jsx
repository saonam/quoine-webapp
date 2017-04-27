import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import TextInput from '@quoine/components/TextInput';

import LargeField from 'components/LargeField';
import SignInHeaderLink from 'components/SignInHeaderLink';

import SubmitButton from './SubmitButton';
import styles from './styles.css';

const ForgotPassword = ({
  onSubmit, email, onEmailChange, error, sent, busy,
}) => (
  <Modal
    isOpen isNoOverlay contentLabel="forgot password modal"
    title={translate('forgot-password:title')}
    leftButton={<SignInHeaderLink />}
  >
    <form onSubmit={onSubmit} className={styles.main}>
      <div className={styles.body}>
        <p className={styles.description}>
          {translate('forgot-password:description')}
        </p>
        <div className={styles.email}>
          <LargeField label={translate('forgot-password:email')}>
            <TextInput
              type="email" value={email} onChange={onEmailChange}
              required border={2}
            />
          </LargeField>
        </div>
        <div className={styles.message}>
          {sent ? (
            <p className={styles.info}>
              {translate('forgot-password:message-sent')}
            </p>
          ) : null}
          {error ? (
            <p className={styles.error}>{translate(error)}</p>
          ) : null}
        </div>
      </div>
      <div className={styles.submit}>
        <SubmitButton sent={sent} busy={busy} />
      </div>
    </form>
  </Modal>
);

ForgotPassword.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  sent: SubmitButton.propTypes.sent,
  busy: SubmitButton.propTypes.busy,
};

export default ForgotPassword;
