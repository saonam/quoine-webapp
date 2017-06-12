import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';
import initialForm from '@quoine/states/user/resources/initialForm';

import View from './View';

import resources from './resources';

let signUpCaptchaWidget;

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1, userId: 0, captcha: '' };
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
    // ===
    this.widget = null;
    this.onRef = this.onRef.bind(this);
    this.onRender = this.onRender.bind(this);
    this.onCallback = this.onCallback.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  onRef(widget) {
    this.widget = widget;
    this.onRender();
  }
  onRender() {
    try {
      window.grecaptcha.getResponse(signUpCaptchaWidget);
    } catch (error) {
      signUpCaptchaWidget = window.grecaptcha.render(
        this.widget,
        {
          sitekey: '6LfOVR0UAAAAAA2kOGke4aWKQH7rdIIy2IGaqazJ',
          callback: this.onCallback,
          'expired-callback': this.onReset,
        },
      );
    }
  }
  onCallback(captcha) {
    this.setState({ captcha });
  }
  onReset() {
    this.setState({ captcha: '' });
    window.grecaptcha.reset(signUpCaptchaWidget);
  }
  onSetStep(step) {
    this.setState({ step });
  }
  onNext(form) {
    const { step, captcha } = this.state;
    if (step === 4) {
      return resources.signUp({ form, captcha })
      .then(user => {
        this.setState({ step: 5, userId: user.id });
      })
      .catch(error => {
        this.onReset();
        return Promise.reject(error);
      });
    }

    this.setState({ step: step + 1 });
    return Promise.resolve();
  }
  onBack() {
    this.setState({ step: this.state.step - 1, captcha: '' });
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
        // ===
        captcha={this.state.captcha}
        onRef={this.onRef}
      />
    );
  }
}

export default SignUp;
