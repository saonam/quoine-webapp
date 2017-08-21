import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';

import View from './View';

class FundCrypto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: true,
      info: {},
    };
    this.onLoad = this.onLoad.bind(this);
  }
  componentDidMount() {
    this.onLoad(this.props.account);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.account !== nextProps.account) {
      this.onLoad(nextProps.account);
    }
  }
  onLoad(account) {
    this.setState({ busy: true });
    resources.load(account)
    .then(info => {
      this.setState({ busy: false, info });
    });
  }
  render() {
    return (
      <View account={this.props.account} {...this.state} />
    );
  }
}

FundCrypto.propTypes = {
  account: PropTypes.string.isRequired,
};

export default FundCrypto;
