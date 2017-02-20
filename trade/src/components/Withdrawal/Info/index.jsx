import React from 'react';

import resources from './resources';

import View from './View';

class WdrInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { infos: {} };
  }
  componentDidMount() {
    resources.load().then(infos => {
      this.setState({ infos });
    });
  }
  render() {
    return (
      <View {...this.props} infos={this.state.infos} />
    );
  }
}

export default WdrInfo;
