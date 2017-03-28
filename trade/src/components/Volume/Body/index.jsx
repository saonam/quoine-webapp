import React from 'react';

import View from './View';

class VolumeBody extends React.Component {
  constructor(props) {
    super(props);
    const now = Math.round((new Date()).getTime() / 1000);
    this.state = {
      // 604800 = 1 week
      frm: now - 604800,
      to: now,
    };
    this.onFrmChange = this.onChange.bind(this, 'frm');
    this.onToChange = this.onChange.bind(this, 'to');
  }
  onChange(side, value) {
    this.setState({ [side]: value });
  }
  render() {
    return (
      <View
        frm={this.state.frm} onFrmChange={this.onFrmChange}
        to={this.state.to} onToChange={this.onToChange}
      />
    );
  }
}

export default VolumeBody;
