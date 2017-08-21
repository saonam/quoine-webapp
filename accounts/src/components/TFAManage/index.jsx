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
    this.onToggleForm = this.onToggleForm.bind(this);
    this.onUpdatePhone = this.onUpdatePhone.bind(this);
    this.onUpdateTfa = this.onUpdateTfa.bind(this);
  }
  componentDidMount() {
    resources.load().then(response => {
      const { tfa, app, phone } = response;
      this.setState({ busy: false, tfa, app, phone });
    });
  }
  onToggleForm() {
    const nextApp = this.state.app ? '' : 'ga';
    this.setState({ app: nextApp });
  }
  onUpdatePhone(phone) {
    this.setState({ phone });
  }
  onUpdateTfa() {
    const { tfa, app } = this.state;
    const nextTfa = !tfa;
    const nextApp = nextTfa ? app : '';
    this.setState({ tfa: nextTfa, app: nextApp });
  }
  render() {
    return (
      <View
        {...this.state}
        onToggleForm={this.onToggleForm}
        onUpdatePhone={this.onUpdatePhone}
        onUpdateTfa={this.onUpdateTfa}
      />
    );
  }
}

export default TFAManage;
