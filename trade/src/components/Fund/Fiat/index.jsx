import React from 'react';

import FormWrapper from '@quoine/components/FormWrapper';

import resources from './resources';
import View from './View';

const initialForm = {
  // common
  bank: '',
  amount: '',
  notes: '',
  // currently JPY only
  method: 'bank',
  // INR only
  INRTransfer: 'IMPS',
};

class FundFiat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { funds: [], cash: false };
    this.onFundsChange = this.onFundsChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }
  componentDidMount() {
    resources.checkCash().then(cash => {
      this.setState({ cash });
    });
  }
  onFundsChange(funds) {
    this.setState({ funds });
  }
  onSubmit(form) {
    return resources.submit({
      ...form,
      account: this.props.account,
    });
  }
  onSuccess(response) {
    this.setState({ funds: [response].concat(this.state.funds) });
  }
  render() {
    return (
      <FormWrapper
        Element={View}
        initialForm={initialForm}
        onSubmit={this.onSubmit}
        onSuccess={this.onSuccess}
        // pass along ===
        account={this.props.account}
        funds={this.state.funds}
        cash={this.state.cash}
        onFundsChange={this.onFundsChange}
      />
    );
  }
}

FundFiat.propTypes = {
  account: React.PropTypes.string.isRequired,
};

export default FundFiat;
