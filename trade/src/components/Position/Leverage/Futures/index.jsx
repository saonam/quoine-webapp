import PropTypes from 'prop-types';
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
  position: PropTypes.shape({
    product: PropTypes.string.isRequired,
    cross: PropTypes.bool,
    leverage: PropTypes.number,
  }).isRequired,
};

export default PositionLeverageFutures;
