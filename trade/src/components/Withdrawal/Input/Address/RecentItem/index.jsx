import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class WdrRecentAddress extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick(this.props.address);
  }
  render() {
    return (
      <View address={this.props.address} onClick={this.onClick} />
    );
  }
}

WdrRecentAddress.propTypes = {
  address: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WdrRecentAddress;
