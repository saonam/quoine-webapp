import React from 'react';

import resources from './resources';

import View from './View';

class ResetPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      token: '',
      busy: false,
      error: '',
    };
    this.onPasswordChange = this.onChange.bind(this, 'password');
    this.onTokenChange = this.onChange.bind(this, 'token');
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(key, value) {
    this.setState({ [key]: value });
  }
  onSubmit(event) {
    // need event because we attach this to form's submit event
    // not just a button
    event.preventDefault();

    if (this.state.busy) { return; }
    this.setState({ busy: true, error: '' });

    const { password, token } = this.state;
    resources.resetPassword({ password, token })
    .then(() => {
      this.props.router.push({
        pathname: '/sign-in',
        query: {
          continue: this.props.location.query.continue,
          message: 'password-updated',
        },
      });
    })
    .catch((error) => {
      this.setState({ busy: false, error: error.message });
    });
  }
  render() {
    const { password, busy, error } = this.state;
    return (
      <View
        busy={busy}
        error={error}
        onSubmit={this.onSubmit}
        // ===
        password={password}
        onPasswordChange={this.onPasswordChange}
        token={this.state.token}
        onTokenChange={this.onTokenChange}
      />
    );
  }
}

ResetPasswordContainer.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
  location: React.PropTypes.shape({
    query: React.PropTypes.shape({
      continue: React.PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ResetPasswordContainer;
