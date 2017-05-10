import PropTypes from 'prop-types';
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
        busy={busy} onSubmit={this.onSubmit}
        error={error}
        showMessage={showMessage} onDismiss={onDismissSuccess}
      />
    );
  }
}

WdrForm.propTypes = {
  bank: PropTypes.number.isRequired,
  account: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
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
