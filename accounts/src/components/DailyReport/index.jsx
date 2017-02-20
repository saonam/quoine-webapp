import React from 'react';

import resources from './resources';

import View from './View';

class DailyReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
      busy: true,
    };
    this.updateValue = this.updateValue.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }
  componentDidMount() {
    resources.load().then(this.updateValue);
  }
  onToggle() {
    this.setState({ busy: true });
    resources.set(!this.state.value).then(this.updateValue);
  }
  updateValue(value) {
    this.setState({ value, busy: false });
  }
  render() {
    const { value, busy } = this.state;
    return (
      <View busy={busy} value={value} onToggle={this.onToggle} />
    );
  }
}

export default DailyReport;
