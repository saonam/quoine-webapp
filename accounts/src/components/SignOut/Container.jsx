import React from 'react';

import resources from './resources';

import View from './View';

class SignOutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      busy: false,
      error: '',
    };
    this.onAllChange = this.onAllChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onAllChange(all) {
    this.setState({ all });
  }
  onSubmit(event) {
    // need event because we attach this to form's submit event
    // not just a button
    event.preventDefault();

    if (this.state.busy) { return; }
    this.setState({ busy: true, error: '' });

    resources.signOut(this.state.all)
    .then(() => {
      if (this.state.all) {
        // fire an event to signout of all sessions
        window.localStorage.setItem('signoutAction', 'all');
      }
      window.location.href = '/sign-in?message=signed-out';
    })
    .catch((error) => {
      this.setState({ busy: false, error: error.message });
    });
  }
  render() {
    const { all, busy, error } = this.state;
    return (
      <View
        busy={busy} error={error} all={all}
        onAllChange={this.onAllChange} onSubmit={this.onSubmit}
      />
    );
  }
}

export default SignOutContainer;
