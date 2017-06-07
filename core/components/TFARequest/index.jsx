import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';

import View from './View';

class TFARequest extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      message: '',
      error: '',
      sent: '',
    };
    this.onRequest = this.onBaseRequest.bind(this, false);
    this.onResend = this.onBaseRequest.bind(this, true);
  }
  componentDidMount() {
    if (!this.props.skipFirst) {
      this.onRequest();
    }
  }
  onBaseRequest(force) {
    if (this.state.busy) { return; }
    this.setState({ busy: true, message: '', error: '' });

    const { payload } = this.props;
    resources.request({ force, payload })
    .then(sent => {
      this.setState({
        sent: sent,
        message: `tfa:sent-${sent}`,
      });
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
      <View {...this.state} onRequest={this.onRequest} onResend={this.onResend} />
    );
  }
}

TFARequest.propTypes = {
  payload: PropTypes.shape({}),
  skipFirst: PropTypes.bool,
};

export default TFARequest;
