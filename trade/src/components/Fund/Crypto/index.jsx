import React from 'react';

import resources from './resources';

import View from './View';

class FundCrypto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busy: false, address: '' };
    this.onLoad = this.onLoad.bind(this);
    this.onRef = this.onRef.bind(this);
    this.onCopy = this.onCopy.bind(this);
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
    .then((address) => {
      this.setState({ address, busy: false });
    });
  }
  onRef(node) {
    this.node = node;
  }
  onCopy() {
    this.node.select();
    document.execCommand('copy');
  }
  render() {
    const { busy, address } = this.state;
    return (
      <View
        busy={busy}
        address={address}
        onCopy={this.onCopy}
        onRef={this.onRef}
      />
    );
  }
}

FundCrypto.propTypes = {
  account: React.PropTypes.string.isRequired,
};

export default FundCrypto;
