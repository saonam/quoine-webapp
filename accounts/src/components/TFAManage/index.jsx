import React from 'react';

import resources from './resources';

import View from './View';

class TFAManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'standby', phone: '', enabled: false, busy: true,
    };
    this.goStandby = this.onChangeStatus.bind(this, 'standby');
    this.goAddPhone = this.onChangeStatus.bind(this, 'addPhone');
    this.goToggle = this.onChangeStatus.bind(this, 'toggle');
    this.onUpdatePhone = this.onUpdatePhone.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }
  componentDidMount() {
    resources.load().then(({ phone, enabled }) => {
      this.setState({ phone, enabled, busy: false });
    });
  }
  onChangeStatus(status) { this.setState({ status }); }
  onUpdatePhone(phone) { this.setState({ phone }); }
  onToggle() { this.setState({ enabled: !this.state.enabled }); }
  render() {
    const { phone, enabled, status, busy } = this.state;
    return (
      <View
        goStandby={this.goStandby}
        status={status} busy={busy}
        // ===
        goAddPhone={this.goAddPhone}
        phone={phone} onUpdatePhone={this.onUpdatePhone}
        // ===
        goToggle={this.goToggle}
        enabled={enabled} onToggle={this.onToggle}
      />
    );
  }
}

export default TFAManage;
