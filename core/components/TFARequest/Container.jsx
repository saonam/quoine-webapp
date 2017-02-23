import React from 'react';

import resources from './resources';

import View from './View';

const getMessage = (response) => {
  switch (response.sent) {
    case 'sms': { return 'tfa:sent-sms' }
    case 'authy': { return 'tfa:sent-authy' }
    case 'email': { return 'tfa:sent-email' }
  }
};

class TFARequest extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      message: '',
      error: '',
      sent: !this.props.skipFirst,
    };
    this.onNormalRequest = this.onRequest.bind(this, false);
    this.onForceRequest = this.onRequest.bind(this, true);
  }
  componentDidMount() {
    if (!this.props.skipFirst) {
      this.onNormalRequest();
    }
  }
  onRequest(force) {
    if (this.state.busy) { return; }
    this.setState({ busy: true, message: '', error: '' });

    const { payload, useEmail, userId } = this.props;
    resources.request({ useEmail, force, payload, userId })
    .then((response) => {
      const message = getMessage(response);
      this.setState({ message });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    })
    .then(() => {
      this.setState({ busy: false });
    });
  }
  render() {
    return (
      <View {...this.state} onRequest={this.onForceRequest} />
    );
  }
}

TFARequest.propTypes = {
  payload: React.PropTypes.shape({}),
  skipFirst: React.PropTypes.bool,
  useEmail: React.PropTypes.bool,
  userId: React.PropTypes.number,
};

export default TFARequest;
