import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Button from '@quoine/components/Button';

import SignInHeaderLink from '../SignInHeaderLink';
import Steps from '../SignUpSteps';

import Body1 from './Body1';
import Body2 from './Body2';
import Body3 from './Body3';
import Body4 from './Body4';
import Body5 from './Body5';
import SubmitButton from './SubmitButton';

import styles from './styles.css';

const Bodies = {
  2: Body2,
  3: Body3,
  4: Body4,
};

const BackButton = ({ onBack }) => (
  <Button styleName="inverse-light inline" onClick={onBack}>
    ← {translate('sign-up:back')}
  </Button>
);

BackButton.propTypes = {
  onBack: React.PropTypes.func.isRequired,
};

const ResetButton = ({ onReset }) => (
  <Button styleName="inverse-light inline" onClick={onReset}>
    ↺ {translate('sign-up:reset')}
  </Button>
);

ResetButton.propTypes = {
  onReset: React.PropTypes.func.isRequired,
};

const SignUpView = ({
  form, onChange, step, onBack, onNext, error, busy, onReset,
}) => {
  let body; let leftButton;
  switch (step) {
    case 1:
      body = <Body1 onChange={onChange} onNext={onNext} />;
      leftButton = <SignInHeaderLink />;
      break;
    case 5:
      body = <Body5 />;
      leftButton = <ResetButton onReset={onReset} />;
      break;
    default: {
      // ensure get property by string key
      const Body = Bodies[`${step}`];
      body = <Body onChange={onChange} form={form} />;
      leftButton = <BackButton onBack={onBack} />;
    }
  }
  return (
    <Modal
      isOpen isNoOverlay contentLabel="sign up modal"
      title={translate('sign-up:title')}
      leftButton={leftButton}
      rightButton={step === 5 ? <SignInHeaderLink /> : null}
    >
      <form onSubmit={onNext} className={styles.main}>
        {step !== 1 && step !== 5 ? (
          <div className={styles.steps}>
            <Steps step={step} type={form.type} />
          </div>
        ) : null}
        <div className={styles.body}>
          {body}
          {error ? (
            <p className={styles.error}>
              {translate(error)}
            </p>
          ) : null}
        </div>
        {step !== 1 && step !== 5 ? (
          <div className={styles.submit}>
            <SubmitButton step={step} busy={busy} />
          </div>
        ) : null}
      </form>
    </Modal>
  );
};

SignUpView.propTypes = {
  form: React.PropTypes.shape(Object.assign(
    {}, Body1.propTypes.form, Body2.propTypes.form, Body3.propTypes.form,
  )).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  // ===
  step: React.PropTypes.number.isRequired,
  onBack: React.PropTypes.func.isRequired,
  onNext: React.PropTypes.func.isRequired,
  onReset: React.PropTypes.func.isRequired,
  // ===
  error: React.PropTypes.string.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default SignUpView;
