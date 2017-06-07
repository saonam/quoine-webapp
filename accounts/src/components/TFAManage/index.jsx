import React from 'react';

import View from './View';

import resources from './resources';

class TFAManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: true,
      tfa: false,
      app: '',
      phone: '',
    };
    this.onSelectApp = this.onSelectApp.bind(this);
    this.onUpdatePhone = this.onUpdatePhone.bind(this);
    this.onToggleTfa = this.onToggleTfa.bind(this);
  }
  componentDidMount() {
    resources.load().then(response => {
      const { tfa, app, phone } = response;
      this.setState({ busy: false, tfa, app, phone });
    });
  }
  onSelectApp(app) {
    this.setState({ app });
  }
  onUpdatePhone(phone) {
    this.setState({ phone });
  }
  onToggleTfa() {
    const { tfa, app } = this.state;
    const nextTfa = !tfa;
    const nextApp = nextTfa ? app : '';
    this.setState({ tfa: nextTfa, app: nextApp });
  }
  render() {
    return (
      <View
        {...this.state}
        onSelectApp={this.onSelectApp}
        onUpdatePhone={this.onUpdatePhone}
        onToggleTfa={this.onToggleTfa}
      />
    );
  }
}

export default TFAManage;
