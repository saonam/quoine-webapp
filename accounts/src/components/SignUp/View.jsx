import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Button from '@quoine/components/Button';
import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import {
  Form1, Form2, Form3, Form4, Form5,
} from 'components/UserForm';
import Steps from 'components/SignUp/Steps';

import styles from './styles.css';

const Forms = [Form1, Form2, Form3, Form4, Form5];

const SignUpView = (props) => {
  const title = translate('sign-up:title');
  const leftButton = props.step > 1 && props.step < 5 ? (
    <Button
      styleName="inverse-light inline"
      onClick={props.onBack}
    >
      ← {translate('sign-up:back')}
    </Button>
  ) : null;

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
          />
        </div>
      ))}

    </Modal>
  );
};

SignUpView.propTypes = {
  ...FormWrapperPropTypes,
  step: React.PropTypes.number.isRequired,
};

// {props.error ? (
//   <p className={styles.error}>
//     {translate(props.error.message)}
//   </p>
// ) : null}

export default SignUpView;
