import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Button from '@quoine/components/Button';

import SignUpHeaderLink from 'components/SignUpHeaderLink';

import styles from './styles.css';

import Body1 from './Body1';
import Body2 from './Body2';

const BackButton = ({ onBack }) => (
  <Button styleName="inverse-light inline" onClick={onBack}>
    ← {translate('sign-in:back')}
  </Button>
);

BackButton.propTypes = {
  onBack: React.PropTypes.func.isRequired,
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
    rightButton={step === 1 ? <SignUpHeaderLink /> : null}
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
  busy: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  step: React.PropTypes.number.isRequired,
  // ===
  form: React.PropTypes.objectOf(React.PropTypes.string).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  // back to step 1
  onBack: BackButton.propTypes.onBack,
  // message from backend (like "account confirmed")
  message: React.PropTypes.string,
};

export default SignIn;
