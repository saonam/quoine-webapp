import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class WdrForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      destinationTag: '', // XRP only
      paymentId: '', // XMR only
      message: '', // XEM only
      // XLM only
      memoType: 'memo_text',
      memoText: '',
      memoId: '',
      memoHash: '',
      // ===
      INRTransfer: '', // INR only
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
      address: process.env.REACT_APP_VENDOR === 'quoine' ? this.props.addressWhiteList : this.state.address,
    });
  }
  render() {
    const { account, submitting, error, success, onDismissSuccess } = this.props;
    const form = {
      ...this.state,
      account: account.currency,
      type: account.type,
    };
    const busy = submitting && submitting.action === 'submit';
    const showMessage = account.type === 'crypto' && success;

    return (
      <View
        form={form} onChange={this.onChange}
        busy={busy} error={error} onSubmit={this.onSubmit}
        showMessage={showMessage} onDismiss={onDismissSuccess}
      />
    );
  }
}

WdrForm.propTypes = {
  account: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  bank: PropTypes.number.isRequired,
  addressWhiteList: PropTypes.shape({
    value: PropTypes.string,
    status: PropTypes.string,
  }),
  // ===
  submitting: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
  // ===
  success: PropTypes.bool.isRequired,
  onDismissSuccess: PropTypes.func.isRequired,
};

export default WdrForm;
