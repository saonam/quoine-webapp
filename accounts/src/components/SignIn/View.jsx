import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import ErrorMessage from '@quoine/components/ErrorMessage';

import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import styles from './styles.css';

import Body1 from './Body1';
import Body2 from './Body2';
import BackButton from './BackButton';
import SubmitButton from './SubmitButton';

const SignIn = (props) => (
  <Modal
    isOpen isNoOverlay contentLabel="sign in modal"
    title={`${
      translate('sign-in:title')
    } ${props.step === 2 ? `– ${props.form.email}` : ''}`}
    leftButton={props.step === 2 ? (<BackButton onBack={props.onBack} />) : null}
  >
    <form onSubmit={props.onSubmit}>
      <div className={styles.main}>
        <div className={styles.body}>
          {props.step === 1 ? (
            <Body1 form={props.form} onChange={props.onChange} message={props.message} />
          ) : (
            <Body2 form={props.form} onChange={props.onChange} />
          )}
          <ErrorMessage className={styles.error} error={props.error} />
        </div>
        <div className={styles.submit}>
          <SubmitButton busy={props.busy} />
        </div>
      </div>
    </form>
  </Modal>
);

SignIn.propTypes = {
  ...FormWrapperPropTypes.PropTypes,
  // ===
  step: PropTypes.number.isRequired,
  // back to step 1
  onBack: BackButton.propTypes.onBack,
  // message from backend (like "account confirmed")
  message: PropTypes.string,
};

export default SignIn;
