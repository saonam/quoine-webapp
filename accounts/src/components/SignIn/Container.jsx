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

class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
    this.onBack = this.onBack.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onBack() {
    this.setState({ step: 1 });
  }
  onSubmit(form) {
    const { step } = this.state;
    const { email, password, code } = form;
    return resources.signIn({ email, password, code, step })
    .then((response) => {
      const { token, tokenId } = response;
      const continueURL = this.props.location.query.continue;
      if (token && tokenId) {
        this.props.setToken({ continueURL, token, tokenId });
      } else {
        this.setState({ step: 2 });
      }
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
