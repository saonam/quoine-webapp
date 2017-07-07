import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Button from '@quoine/components/Button';
import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import SignInHeaderLink from 'components/SignInHeaderLink';
import {
  Form1, Form2, Form3, Form4, Form5,
} from 'components/UserForm';
import Steps from 'components/SignUp/Steps';

import styles from './styles.css';

const Forms = [Form1, Form2, Form3, Form4, Form5];

/* eslint-disable react/prop-types */
const getLeftButton = (props) => {
  // Temporarily hide signin link for qryptos
  if (props.step === 1) {
    return (<SignInHeaderLink />);
  }
  if (props.step < 5) {
    return (
      <Button
        styleName="inverse-light inline"
        onClick={props.onBack}
      >
        ← {translate('sign-up:back')}
      </Button>
    );
  }
  return null;
};
/* eslint-enable react/prop-types */

const SignUpView = (props) => {
  const title = translate('sign-up:title');
  const leftButton = getLeftButton(props);

  return (
    <Modal
      isOpen isNoOverlay
      contentLabel={title} title={title}
      leftButton={leftButton}
    >

      {props.step < 5 ? (
        <div className={styles.steps}>
          <Steps current={props.step} />
        </div>
      ) : null}

      {Forms.map((Form, index) => (
        <div
          key={index}
          style={props.step - 1 !== index ? { display: 'none' } : {}}
        >
          <Form
            onSubmit={props.onSubmit}
            form={props.form}
            onChange={props.onChange}
            busy={props.busy}
            error={props.error}
            // ===
            userId={props.userId}
            // ===
            captcha={props.captcha}
            onRef={props.onRef}
          />
        </div>
      ))}

    </Modal>
  );
};

SignUpView.propTypes = {
  ...FormWrapperPropTypes,
  // ===
  step: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  // ===
  captcha: PropTypes.string.isRequired,
  onRef: PropTypes.func.isRequired,
};

export default SignUpView;
