import PropTypes from 'prop-types';
import React from 'react';

import FormWrapper from '@quoine/components/FormWrapper';
import View from './View';

import resources from './resources';

const initialForm = {
  email: '',
  password: '',
  code: '',
};

let signInCaptchaWidget;

class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      captcha: '',
    };
    this.onBack = this.onBack.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
      window.grecaptcha.getResponse(signInCaptchaWidget);
    } catch (error) {
      signInCaptchaWidget = window.grecaptcha.render(
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
    window.grecaptcha.reset(signInCaptchaWidget);
  }
  onBack() {
    this.setState({ step: 1, captcha: '' });
  }
  onSubmit(form) {
    const { step, captcha } = this.state;
    const { email, password, code } = form;
    return resources.signIn({ email, password, code, step, captcha })
    .then((response) => {
      const { token, tokenId } = response;
      const continueURL = this.props.location.query.continue;
      if (token && tokenId) {
        this.props.setToken({ continueURL, token, tokenId });
      } else {
        this.setState({ step: 2 });
      }
    })
    .catch(error => {
      this.onReset();
      return Promise.reject(error);
    });
  }
  render() {
    return (
      <FormWrapper
        initialForm={initialForm}
        onSubmit={this.onSubmit}
        Element={View}
        // ===
        step={this.state.step}
        onBack={this.onBack}
        message={this.props.location.query.message}
        // ===
        captcha={this.state.captcha}
        onRef={this.onRef}
      />
    );
  }
}

SignInContainer.propTypes = {
  setToken: PropTypes.func.isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      continue: PropTypes.string,
      message: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default SignInContainer;
