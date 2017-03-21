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
      const e = { target: { value: form } };
      this.props.onChange.jpTerm(e);
      return this.props.onSubmit();
    }

    return this.props.onSubmit(this.props.form)
    .then(() => this.props.onClose());
  }
  render() {
    return (
      <FromWrapper
        initialForm={initialForm}
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
  form: React.PropTypes.shape().isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  // ===
  edit: React.PropTypes.bool,
  onClose: React.PropTypes.func,
  ...View.propTypes.error,
};

export default UserForm4Jp;
