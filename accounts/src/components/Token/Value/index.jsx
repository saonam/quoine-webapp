import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class TokenValue extends React.Component {
  constructor(props) {
    super(props);
    this.onCopy = this.onCopy.bind(this);
    this.onRef = this.onRef.bind(this);
  }
  onRef(node) {
    this.node = node;
  }
  onCopy() {
    this.node.select();
    document.execCommand('copy');
  }
  render() {
    return (
      <View
        token={this.props.token} onRef={this.onRef} onCopy={this.onCopy}
      />
    );
  }
}

TokenValue.propTypes = {
  token: PropTypes.shape({}).isRequired,
};

export default TokenValue;
