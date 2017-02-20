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
  onAllChange(event) {
    this.setState({ all: event.target.value });
  }
  onSubmit(e) {
    // need e because we attach this to form's submit event
    // not just a button
    e.preventDefault();

    if (this.state.busy) { return; }
    this.setState({ busy: true, error: '' });

    resources.signOut(this.state.all)
    .then(() => {
      this.props.router.push({
        pathname: '/sign-in',
        query: { message: 'signed-out' },
      });
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

SignOutContainer.propTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default SignOutContainer;
