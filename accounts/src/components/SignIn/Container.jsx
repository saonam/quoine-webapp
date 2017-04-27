import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';

import View from './View';

class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      form: { email: '', password: '', code: '' },
      busy: false,
      error: '',
    };
    this.onChange = Object.keys(this.state.form).reduce(
      (handlers, key) => Object.assign(handlers, {
        [key]: this.onChangeBase.bind(this, key),
      })
    , {});
    this.onSubmit = this.onSubmit.bind(this);
    this.onBack = this.onBack.bind(this);
  }
  onChangeBase(key, value) {
    const form = Object.assign({}, this.state.form, {
      [key]: value,
    });
    this.setState({ form });
  }
  onBack() {
    this.setState({ step: 1, error: '' });
  }
  onSubmit(event) {
    // need event because we attach this to form's submit event
    // not just a button
    event.preventDefault();

    if (this.state.busy) { return; }
    this.setState({ busy: true, error: '' });

    const { step, form } = this.state;
    const { email, password } = form;
    const code = step === 1 ? undefined : form.code;
    resources.signIn({ email, password, code })
    .then((response) => {
      const { token, tokenId } = response;
      const continueURL = this.props.location.query.continue;
      if (token && tokenId) {
        this.props.setToken({ continueURL, token, tokenId });
      } else {
        this.setState({ busy: false, step: 2 });
      }
    })
    .catch((error) => {
      this.setState({ busy: false, error: error.message });
    });
    // we don't need to set busy back to false in case of success
    // since it will redirect anyway
  }
  render() {
    const { step, form, busy, error } = this.state;
    return (
      <View
        busy={busy} error={error} step={step} form={form}
        onChange={this.onChange} onSubmit={this.onSubmit}
        onBack={this.onBack}
        // ===
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
