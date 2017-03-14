import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import initialForm from './initialForm';
import View from './View';

class SignUpForm3JpIndi extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    const e = { target: { value: form } };
    this.props.onChange.jpIndi(e);
    return this.props.onSubmit();
  }
  render() {
    return (
      <FromWrapper
        initialForm={initialForm}
        onSubmit={this.onSubmit}
        Element={View}
      />
    );
  }
}

SignUpForm3JpIndi.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default SignUpForm3JpIndi;
