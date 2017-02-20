import React from 'react';

import View from './View';

class WdrRecentAddress extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick({ target: { value: this.props.address } });
  }
  render() {
    return (
      <View address={this.props.address} onClick={this.onClick} />
    );
  }
}

WdrRecentAddress.propTypes = {
  address: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default WdrRecentAddress;
