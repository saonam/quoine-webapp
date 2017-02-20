import React from 'react';

import resources from './resources';

import View from './View';

class TFAManageChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', busy: false };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    this.setState({ busy: true });
    resources.submit(this.state.value).then(phone => {
      this.props.onChangePhone(phone);
      this.props.goStandby();
    });
  }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    const { value, busy } = this.state;
    return (
      <View
        value={value} onChange={this.onChange} busy={busy}
        onSubmit={this.onSubmit} onCancel={this.props.goStandby}
      />
    );
  }
}

TFAManageChange.propTypes = {
  goStandby: View.propTypes.onCancel,
  onChangePhone: React.PropTypes.func.isRequired,
};

export default TFAManageChange;
