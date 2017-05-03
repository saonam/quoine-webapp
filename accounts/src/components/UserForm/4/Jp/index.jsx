import PropTypes from 'prop-types';
import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import initialForm from './initialForm';
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
        initialForm={initialForm}
        changed={this.props.changed}
        onSubmit={this.onSubmit}
        Element={View}
        // ===
        originalForm={this.props.form}
        edit={this.props.edit}
        parentError={this.props.error}
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
};

export default UserForm4Jp;
