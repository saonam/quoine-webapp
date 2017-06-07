import React from 'react';

import resources from './resources';

import View from './View';

class TFAGAEnable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: true,
      gaKey: '',
      qrCode: '',
    };
  }
  componentDidMount() {
    resources.load()
    .then(response => {
      this.setState({
        busy: false,
        gaKey: response.gaKey,
        qrCode: response.qrCode,
      });
    });
  }
  render() {
    return (
      <View {...this.state} {...this.props} />
    );
  }
}

export default TFAGAEnable;
