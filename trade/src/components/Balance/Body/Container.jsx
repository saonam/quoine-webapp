import React from 'react';

import View from './View';

class BalanceBodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currency: 'BTC' };
    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.currency !== nextProps.currency) {
      this.setState({ currency: nextProps.currency });
    }
  }
  onChange(currency) {
    this.setState({ currency });
  }
  render() {
    return (
      <View
        currency={this.state.currency}
        onChange={this.onChange}
      />
    );
  }
}

BalanceBodyContainer.propTypes = {
  currency: React.PropTypes.string.isRequired,
};

export default BalanceBodyContainer;
