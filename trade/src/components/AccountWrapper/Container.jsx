import React from 'react';

import Body from './Body';

class AccountWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { account: 'BTC' };
    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.currency !== nextProps.currency) {
      this.setState({ account: nextProps.currency });
    }
  }
  onChange(account) {
    this.setState({ account });
  }
  render() {
    return (
      <Body
        {...this.props}
        currency={this.state.account}
        onChange={this.onChange}
      />
    );
  }
}

AccountWrapper.propTypes = {
  currency: React.PropTypes.string.isRequired,
};

export default AccountWrapper;
