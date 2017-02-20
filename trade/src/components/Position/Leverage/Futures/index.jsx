import React from 'react';
import resources from './resources';

import View from './View';

class PositionLeverageFutures extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busy: false };
    this.onChange = this.onChange.bind(this);
  }
  onChange(leverage) {
    this.setState({ busy: true });
    resources.setLeverage(this.props.position.product, leverage)
    .then(() => this.setState({ busy: false }));
  }
  render() {
    const { position } = this.props;
    const leverage = position.cross ? 0 : position.leverage;
    return (
      <View
        busy={this.state.busy}
        leverage={leverage} onChange={this.onChange}
      />
    );
  }
}

PositionLeverageFutures.propTypes = {
  position: React.PropTypes.shape({
    product: React.PropTypes.string.isRequired,
    cross: React.PropTypes.bool,
    leverage: React.PropTypes.number,
  }).isRequired,
};

export default PositionLeverageFutures;
