import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Modal from '@quoine/components/Modal';
import Button from '@quoine/components/Button';
import { FormWrapperPropTypes } from '@quoine/components/FormWrapper';

import { Form3, Form4 } from 'components/UserForm';

const Forms = [Form3, Form4];

const UserEditView = (props) => {
  const title = translate('edit-user:title');
  const leftButton = props.step === 2 ? (
    <Button
      styleName="inverse-light inline"
      onClick={props.onBack}
    >
      ← {translate('edit-user:back')}
    </Button>
  ) : null;

  return (
    <Modal
      isOpen
      contentLabel={title} title={title}
      leftButton={leftButton}
      rightButton={(
        <Button styleName="inverse-light inline" onClick={props.onClose}>
          {translate('edit-user:action-cancel')}
        </Button>
      )}
    >
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
            edit
            onClose={props.onClose}
          />
        </div>
      ))}
    </Modal>
  );
};

UserEditView.propTypes = {
  ...FormWrapperPropTypes,
  step: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserEditView;
