import React from 'react';

import resources from './resources';

import View from './Step2View';

class DemoStep2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      busy: false,
      error: '',
      isFromPrev: false,
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    resources.getEmail(this.props.mode)
    .then(({ email, isFromPrev }) => {
      this.setState({ email, isFromPrev });
    });
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  onSubmit(e) {
    // need e because we attach this to form's submit event
    // not just a button
    e.preventDefault();

    if (this.state.busy) { return; }
    this.setState({ busy: true, error: '' });

    resources.add(this.state.email)
    .then((response) => {
      const { token, tokenId } = response;
      const rawContinueURL = this.props.location.query.continue || '';
      // ensure only redirect to sandbox
      const continueURL = (
        // if null => saga will redirect to correct one
        rawContinueURL.indexOf('sandbox') !== -1 ? rawContinueURL : null
      );
      window.localStorage.setItem('account-demo', this.state.email);
      this.props.setToken({ continueURL, token, tokenId });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    })
    .then(() => {
      this.setState({ busy: false });
    });
  }
  render() {
    const { email, busy, error, isFromPrev } = this.state;
    return (
      <View
        busy={busy} error={error} email={email} mode={this.props.mode}
        onEmailChange={this.onEmailChange} onSubmit={this.onSubmit}
        isFromPrev={isFromPrev}
      />
    );
  }
}

DemoStep2.propTypes = {
  setToken: React.PropTypes.func.isRequired,
  location: React.PropTypes.shape({
    query: React.PropTypes.shape({
      continue: React.PropTypes.string,
    }).isRequired,
  }).isRequired,
  mode: React.PropTypes.string.isRequired,
};

export default DemoStep2;
