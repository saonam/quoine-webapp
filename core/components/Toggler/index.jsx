import React from 'react';

import View from './View';

class Toggler extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.onToggle = this.onToggle.bind(this);
  }
  onToggle() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <View
        open={this.state.open}
        onToggle={this.onToggle}
        {...this.props}
      />
    );
  }
}

export default Toggler;
