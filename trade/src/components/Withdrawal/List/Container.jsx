import React from 'react';

import View from './View';

class WdrList extends React.Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
  }
  componentDidMount() {
    this.onLoad();
  }
  componentDidUpdate(prevProps) {
    this.onLoad(prevProps.account);
  }
  onLoad(prevAccount) {
    const account = this.props.account;
    if (
      prevAccount &&
      account.currency === prevAccount.currency
    ) { return; }

    const { currency, type } = account;
    this.props.onLoad({ currency, type });
  }
  render() {
    return (
      <View
        busy={this.props.busy}
        withdrawals={this.props.withdrawals}
      />
    );
  }
}

WdrList.propTypes = {
  account: React.PropTypes.shape({
    currency: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }).isRequired,
  // ===
  onLoad: React.PropTypes.func.isRequired,
  busy: React.PropTypes.bool.isRequired,
  withdrawals: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default WdrList;
