import PropTypes from 'prop-types';
import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';
import { jpTerm } from '@quoine/states/user/resources/initialForm';

import View from './View';

class UserForm4Jp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    if (!this.props.edit) {
      this.props.onChange.jpTerm(form);
      return this.props.onSubmit();
    }

    return this.props.onSubmit(this.props.form)
    .then(() => this.props.onClose());
  }
  render() {
    return (
      <FromWrapper
        initialForm={jpTerm}
        onSubmit={this.onSubmit}
        Element={View}
        // ===
        originalForm={this.props.form}
        edit={this.props.edit}
        parentError={this.props.error}
        changed={this.props.changed}
        // ===
        captcha={this.props.captcha}
        onRef={this.props.onRef}
      />
    );
  }
}

UserForm4Jp.propTypes = {
  form: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  // ===
  edit: PropTypes.bool,
  onClose: PropTypes.func,
  ...View.propTypes.error,
  // ===
  ...View.propTypes.captcha,
  ...View.propTypes.onRef,
};

export default UserForm4Jp;
