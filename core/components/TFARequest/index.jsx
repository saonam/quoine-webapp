import React from 'react';

import * as resources from './resources';

import View from './View';

class TFARequestContainer extends React.PureComponent {
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

    const { payload } = this.props;
    resources.request({ force, payload })
    .then((response) => {
      const message = response.ignored ?
        'tfa:sent-authy' :
        'tfa:sent-sms';
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

TFARequestContainer.propTypes = {
  payload: React.PropTypes.shape({}),
  skipFirst: React.PropTypes.bool,
};

export default TFARequestContainer;
