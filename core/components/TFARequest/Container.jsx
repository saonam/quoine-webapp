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
      const message = `tfa:sent-${response.sent}`;
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
  payload: PropTypes.shape({}),
  skipFirst: PropTypes.bool,
  useEmail: PropTypes.bool,
  userId: PropTypes.number,
};

export default TFARequest;
