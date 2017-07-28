import PropTypes from 'prop-types';
import React from 'react';

import Body from './Body';

class WdrAddress extends React.PureComponent {
  componentDidMount() {
    this.props.onAccountChange(this.props.account);
  }
  componentDidUpdate(prevProps) {
    if (this.props.account !== prevProps.account) {
      this.props.onAccountChange(this.props.account);
    }
  }
  render() {
    return (
      <Body />
    );
  }
}

WdrAddress.propTypes = {
  account: PropTypes.string.isRequired,
  onAccountChange: PropTypes.func.isRequired,
};

export default WdrAddress;
