import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';

import View from './View';

class FundCrypto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      address: '',
      paymentId: '',
    };
    this.onLoad = this.onLoad.bind(this);
  }
  componentDidMount() {
    this.onLoad();
  }
  componentDidUpdate(prevProps) {
    this.onLoad(prevProps.account);
  }
  onLoad(prevAccount) {
    const { account } = this.props;
    if (account === prevAccount) { return; }

    this.setState({ busy: true });
    resources.load(account)
    .then(response => {
      const { address, paymentId } = response;
      this.setState({ busy: false, address, paymentId });
    });
  }
  render() {
    return (
      <View {...this.state} account={this.props.account} />
    );
  }
}

FundCrypto.propTypes = {
  account: PropTypes.string.isRequired,
};

export default FundCrypto;
