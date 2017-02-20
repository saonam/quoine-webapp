import React from 'react';

import resources from './resources';

import View from './View';

class FuturesBalance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: '1',
      busy: false,
      error: false,
      success: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      quantity: e.target.value, error: false, success: false,
    });
  }
  onSubmit(event) {
    event.preventDefault();

    // ready
    const quantity = Number(this.state.quantity);
    const { type, btc, futures } = this.props;
    const available = (type === 'fund' ? btc : futures).balance;

    // set
    if (quantity > available) {
      this.setState({
        error: 'futures-balance-error:quantity-too-large',
      });
      return;
    }

    // validate
    this.setState({ busy: true });
    resources.submit(type, quantity)
      .then(() => {
        this.setState({ success: true });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      })
      .then(() => {
        this.setState({ busy: false });
      });
  }
  render() {
    return (
      <View
        {...this.props}
        {...this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    );
  }
}

FuturesBalance.propTypes = {
  type: View.propTypes.type,
  btc: View.propTypes.btc,
  futures: View.propTypes.futures,
};

export default FuturesBalance;
