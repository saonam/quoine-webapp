import React from 'react';

import View from './View';

class Expander extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { expand: false };
    this.onToggle = this.onToggle.bind(this);
  }
  onToggle() {
    this.setState({ expand: !this.state.expand });
  }
  render() {
    return (
      <View
        expand={this.state.expand} onToggle={this.onToggle} {...this.props}
      />
    );
  }
}

export default Expander;
