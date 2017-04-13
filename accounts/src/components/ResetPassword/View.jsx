import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import ButtonWLoading from '@quoine/components/ButtonWLoading';

import styles from './styles.css';

const ForgotPassword = ({
  password, token,
  onPasswordChange, onTokenChange,
  onSubmit, error, busy,
}) => (
  <Modal
    isOpen isNoOverlay contentLabel="reset password modal"
    title={translate('reset-password:title')}
  >
    <form onSubmit={onSubmit} className={styles.main}>
      <div className={styles.body}>

        <div className={styles.input}>
          <Input large label={translate('reset-password:new-password')}>
            <TextBox
              type="password" value={password} onChange={onPasswordChange}
            />
          </Input>
          <p className={styles.help}>
            {translate('reset-password:new-password-help')}
          </p>
        </div>

        <div className={styles.input}>
          <Input large label={translate('reset-password:token')}>
            <TextBox
              type="text" value={token} onChange={onTokenChange}
            />
          </Input>
          <p className={styles.help}>
            {translate('reset-password:token-help')}
          </p>
        </div>

        <p className={styles.error}>
          {translate(error)}
        </p>
      </div>
      <div className={styles.submit}>
        <ButtonWLoading
          type="submit" busy={busy} styleName="modal accent"
        >
          {translate('reset-password:action')}
        </ButtonWLoading>
      </div>
    </form>
  </Modal>
);

ForgotPassword.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  password: React.PropTypes.string.isRequired,
  token: React.PropTypes.string.isRequired,
  onPasswordChange: React.PropTypes.func.isRequired,
  onTokenChange: React.PropTypes.func.isRequired,
  error: React.PropTypes.string.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default ForgotPassword;
