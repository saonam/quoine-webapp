import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Button from '@quoine/components/Button';

import styles from './styles.css';

import Body1 from './Body1';
import Body2 from './Body2';

const BackButton = ({ onBack }) => (
  <Button styleName="inverse-light inline" onClick={onBack}>
    ← {translate('sign-in:back')}
  </Button>
);

BackButton.propTypes = {
  onBack: PropTypes.func.isRequired,
};

const SignIn = ({
  onSubmit, form, onChange, error, step, busy, onBack, message,
}) => (
  <Modal
    isOpen isNoOverlay contentLabel="sign in modal"
    title={`${
      translate('sign-in:title')
    } ${step === 2 ? `– ${form.email}` : ''}`}
    leftButton={step === 2 ? <BackButton onBack={onBack} /> : null}
  >
    <form onSubmit={onSubmit} className={styles.main}>
      <div className={styles.body}>
        {step === 1 ? (
          <Body1 form={form} onChange={onChange} message={message} />
        ) : (
          <Body2 form={form} onChange={onChange} />
        )}
        <p className={styles.error}>{translate(error)}</p>
      </div>
      <div className={styles.submit}>
        <ButtonWLoading
          type="submit" busy={busy} styleName="modal accent"
        >
          {translate('sign-in:action')}
        </ButtonWLoading>
      </div>
    </form>
  </Modal>
);

SignIn.propTypes = {
  busy: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  // ===
  form: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  onSubmit: PropTypes.func.isRequired,
  // back to step 1
  onBack: BackButton.propTypes.onBack,
  // message from backend (like "account confirmed")
  message: PropTypes.string,
};

export default SignIn;
