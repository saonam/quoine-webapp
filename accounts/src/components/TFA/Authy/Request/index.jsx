import React from 'react';

import resources from './resources';

import View from './View';

class TFAAuthyRequest extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      message: '',
      error: false,
    };
    this.onResend = this.onRequest.bind(this, true);
  }
  componentDidMount() {
    this.onRequest(false);
  }
  onRequest(force) {
    if (this.state.busy) { return; }
    this.setState({ busy: true, message: '', error: false });

    resources.request(force)
    .then(sent => { this.setState({ message: `tfa:sent-${sent}` }); })
    .catch(error => { this.setState({ error }); })
    .then(() => { this.setState({ busy: false }); });
  }
  render() {
    return (
      <View {...this.state} onResend={this.onResend} />
    );
  }
}

export default TFAAuthyRequest;
