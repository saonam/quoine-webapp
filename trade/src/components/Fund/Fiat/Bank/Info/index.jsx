import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';
import View from './View';

class FundInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busy: false, banks: [] };
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
    if (!account || account === prevAccount) { return; }

    this.setState({ busy: true });
    resources.load(account)
    .then((banks) => {
      this.setState({ banks, busy: false });
    });
  }
  render() {
    const { account } = this.props;
    const { busy, banks } = this.state;
    return (
      <View account={account} busy={busy} banks={banks} />
    );
  }
}

FundInfo.propTypes = {
  account: PropTypes.string.isRequired,
};

export default FundInfo;
