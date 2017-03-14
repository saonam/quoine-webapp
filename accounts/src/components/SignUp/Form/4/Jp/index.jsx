import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import initialForm from './initialForm';
import View from './View';

class SignUpForm4Jp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    const e = { target: { value: form } };
    this.props.onChange.jpTerm(e);
    return this.props.onSubmit();
  }
  render() {
    return (
      <FromWrapper
        initialForm={initialForm}
        onSubmit={this.onSubmit}
        Element={View}
        // ===
        originalForm={this.props.form}
      />
    );
  }
}

SignUpForm4Jp.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default SignUpForm4Jp;
