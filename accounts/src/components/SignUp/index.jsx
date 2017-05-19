import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';
import initialForm from '@quoine/states/user/resources/initialForm';

import View from './View';

import resources from './resources';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1, userId: 0 };
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
  }
  onSetStep(step) {
    this.setState({ step });
  }
  onNext(form) {
    const { step } = this.state;
    if (step === 4) {
      return resources.signUp(form)
      .then(user => {
        this.setState({ step: 5, userId: user.id });
      });
    }

    this.setState({ step: step + 1 });
    return Promise.resolve();
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
        userId={this.state.userId}
      />
    );
  }
}

export default SignUp;
