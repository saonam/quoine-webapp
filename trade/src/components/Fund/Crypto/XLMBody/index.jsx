import React from 'react';

import View from './View';

class FundCryptoXLMBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'memo_text',
    };
    this.setType = this.setType.bind(this);
  }
  setType(type) {
    this.setState({ type });
  }
  render() {
    return (
      <View type={this.state.type} setType={this.setType} {...this.props} />
    );
  }
}

export default FundCryptoXLMBody;
