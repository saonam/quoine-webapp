import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';

import SignInHeaderLink from '../SignInHeaderLink';

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
          <Input large id="email" label={translate('forgot-password:email')}>
            <TextBox type="email" value={email} onChange={onEmailChange} />
          </Input>
        </div>
        <div className={styles.message}>
          {sent ? (
            <p className={styles.info}>
              {translate('forgot-password:message-sent')}
            </p>
          ) : null}
          <p className={styles.error}>{translate(error)}</p>
        </div>
      </div>
      <div className={styles.submit}>
        <SubmitButton sent={sent} busy={busy} />
      </div>
    </form>
  </Modal>
);

ForgotPassword.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  email: React.PropTypes.string.isRequired,
  onEmailChange: React.PropTypes.func.isRequired,
  error: React.PropTypes.string.isRequired,
  sent: SubmitButton.propTypes.sent,
  busy: SubmitButton.propTypes.busy,
};

export default ForgotPassword;
