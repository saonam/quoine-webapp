import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import TextInput from '@quoine/components/TextInput';
import ButtonWLoading from '@quoine/components/ButtonWLoading';
import ErrorMessage from '@quoine/components/ErrorMessage';
import LargeField from 'components/LargeField';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

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
              value={props.form.password} onChange={props.onChange.password}
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
              value={props.form.token} onChange={props.onChange.token}
            />
          </LargeField>
          <p className={styles.help}>
            {translate('reset-password:token-help')}
          </p>
        </div>

        <ErrorMessage className={styles.error} error={props.error} />

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
  ...FormWrapperPropTypes,
};

export default ForgotPassword;
