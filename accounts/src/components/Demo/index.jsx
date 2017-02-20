import React from 'react';

import View from './View';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1, mode: '',
    };
    this.onBack = this.onBack.bind(this);
    this.onNew = this.onNext.bind(this, 'new');
    this.onContinue = this.onNext.bind(this, 'continue');
  }
  onBack() {
    this.setState({ step: 1 });
  }
  onNext(mode) {
    this.setState({ step: 2, mode });
  }
  render() {
    return (
      <View
        step={this.state.step} mode={this.state.mode}
        onBack={this.onBack} onNew={this.onNew} onContinue={this.onContinue}
      />
    );
  }
}

export default Demo;
