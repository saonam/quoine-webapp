import React from 'react';

import resources from './resources';

import View from './View';

class ResetPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      busy: false,
      error: '',
    };
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onPasswordChange(password) {
    this.setState({ password });
  }
  onSubmit(event) {
    // need event because we attach this to form's submit event
    // not just a button
    event.preventDefault();

    if (this.state.busy) { return; }
    this.setState({ busy: true, error: '' });

    const { password } = this.state;
    const { token } = this.props.location.query;
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
        busy={busy} error={error} password={password}
        onPasswordChange={this.onPasswordChange} onSubmit={this.onSubmit}
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
      token: React.PropTypes.string.isRequired,
      continue: React.PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ResetPasswordContainer;
