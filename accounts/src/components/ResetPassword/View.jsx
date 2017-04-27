import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import TextInput from '@quoine/components/TextInput';
import ButtonWLoading from '@quoine/components/ButtonWLoading';

import LargeField from 'components/LargeField';

import styles from './styles.css';

const ForgotPassword = (props) => (
  <Modal
    isOpen isNoOverlay contentLabel="reset password modal"
    title={translate('reset-password:title')}
  >
    <form onSubmit={props.onSubmit} className={styles.main}>

      <div className={styles.body}>

        <div className={styles.input}>
          <LargeField label={translate('reset-password:new-password')}>
            <TextInput
              type="password" border={2} required
              value={props.password} onChange={props.onPasswordChange}
              // ===
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
              title={translate('reset-password:new-password-help')}
            />
          </LargeField>
          <p className={styles.help}>
            {translate('reset-password:new-password-help')}
          </p>
        </div>

        <div className={styles.input}>
          <LargeField label={translate('reset-password:token')}>
            <TextInput
              type="text" border={2} required
              value={props.token} onChange={props.onTokenChange}
            />
          </LargeField>
          <p className={styles.help}>
            {translate('reset-password:token-help')}
          </p>
        </div>

        <p className={styles.error}>
          {translate(props.error)}
        </p>
      </div>
      <div className={styles.submit}>
        <ButtonWLoading type="submit" busy={props.busy} styleName="modal accent">
          {translate('reset-password:action')}
        </ButtonWLoading>
      </div>
    </form>
  </Modal>
);

ForgotPassword.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onTokenChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  busy: PropTypes.bool.isRequired,
};

export default ForgotPassword;
