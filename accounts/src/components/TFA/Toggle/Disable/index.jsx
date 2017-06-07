import React from 'react';

import View from './View';

class TFADisable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.onToggleOpen = this.onToggleOpen.bind(this);
  }
  onToggleOpen() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <View
        {...this.props}
        open={this.state.open}
        onToggleOpen={this.onToggleOpen}
      />
    );
  }
}

export default TFADisable;
