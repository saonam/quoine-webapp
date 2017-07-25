import PropTypes from 'prop-types';
import React from 'react';

import validateUrl from 'utils/validateUrl';

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
  onEmailChange(email) {
    this.setState({ email });
  }
  onSubmit(event) {
    // need event because we attach this to form's submit event
    // not just a button
    event.preventDefault();

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

      this.props.setToken({ token, tokenId });
      window.location.href = validateUrl(continueURL);
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
  setToken: PropTypes.func.isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      continue: PropTypes.string,
    }).isRequired,
  }).isRequired,
  mode: PropTypes.string.isRequired,
};

export default DemoStep2;
