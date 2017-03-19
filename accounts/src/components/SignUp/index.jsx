import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';
import initialForm from 'components/UserForm/initialForm';

import View from './View';

import onNext from './onNext';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
  }
  onSetStep(step) {
    this.setState({ step });
  }
  onNext(form) {
    return onNext(this.state.step, form)
    .then((response) => {
      this.setState({ step: this.state.step + 1 });
      return response;
    });
  }
  onBack() {
    this.setState({ step: this.state.step - 1 });
  }
  render() {
    return (
      <FromWrapper
        initialForm={initialForm}
        onSubmit={this.onNext}
        Element={View}
        // ===
        step={this.state.step}
        onBack={this.onBack}
      />
    );
  }
}

export default SignUp;
