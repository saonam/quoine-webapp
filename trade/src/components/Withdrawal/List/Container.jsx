import PropTypes from 'prop-types';
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
  account: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  // ===
  onLoad: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
  withdrawals: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default WdrList;
