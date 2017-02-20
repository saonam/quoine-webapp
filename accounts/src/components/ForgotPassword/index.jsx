import React from 'react';

import resources from './resources';

import View from './View';

class ForgotPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      busy: false,
      error: '',
      sent: false, // whether sent or not with the current email
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onEmailChange(event) {
    this.setState({
      email: event.target.value,
      sent: false, // email is changed => haven't sent yet
    });
  }
  onSubmit(e) {
    // need e because we attach this to form's submit event
    // not just a button
    e.preventDefault();

    if (this.state.busy) { return; }
    this.setState({ busy: true, error: '', sent: false });

    resources.forgotPassword(this.state.email)
    .then(() => {
      this.setState({ sent: true });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    })
    .then(() => {
      this.setState({ busy: false });
    });
  }
  render() {
    const { sent, email, busy, error } = this.state;
    return (
      <View
        busy={busy} error={error} sent={sent} email={email}
        onEmailChange={this.onEmailChange} onSubmit={this.onSubmit}
      />
    );
  }
}

export default ForgotPasswordContainer;
