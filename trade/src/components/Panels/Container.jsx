import React from 'react';

import View from './View';

class Panels extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.onEnter = this.onSetHover.bind(this, true);
    this.onLeave = this.onSetHover.bind(this, false);
  }
  onSetHover(hover) {
    this.setState({ hover });
  }
  render() {
    return (
      <View
        hover={this.state.hover} onEnter={this.onEnter} onLeave={this.onLeave}
        {...this.props}
      />
    );
  }
}

export default Panels;
