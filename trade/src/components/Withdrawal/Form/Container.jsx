import React from 'react';

import View from './View';

class WdrForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      // INR only
      INRTransfer: '',
      quantity: '100',
      code: '',
    };
    this.onChange = Object.keys(this.state)
      .reduce((prev, key) => ({
        ...prev,
        [key]: this.onChange.bind(this, key),
      }), {});
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(key, value) {
    this.setState({ [key]: value });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      ...this.state,
      bank: this.props.bank,
      account: this.props.account.currency,
      type: this.props.account.type,
    });
  }
  render() {
    const { account, submitting } = this.props;
    const form = {
      ...this.state,
      account: account.currency,
      type: account.type,
    };
    const busy = submitting && submitting.action === 'submit';
    return (
      <View
        form={form} onChange={this.onChange}
        busy={busy} onSubmit={this.onSubmit}
        error={this.props.error}
      />
    );
  }
}

WdrForm.propTypes = {
  bank: React.PropTypes.number.isRequired,
  account: React.PropTypes.shape({
    currency: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }).isRequired,
  // ===
  submitting: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({}),
  ]).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({}),
  ]).isRequired,
};

export default WdrForm;
