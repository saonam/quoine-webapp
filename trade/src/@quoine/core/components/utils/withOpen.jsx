import React from 'react';

const withOpen = (View) => {
  class OpenContainer extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = { open: false };
      this.onOpen = this.onOpen.bind(this);
      this.onClose = this.onClose.bind(this);
    }
    onOpen() {
      this.setState({ open: true });
    }
    onClose() {
      this.setState({ open: false });
    }
    render() {
      return (
        <View
          open={this.state.open} onOpen={this.onOpen} onClose={this.onClose}
          {...this.props}
        />
      );
    }
  }
  return OpenContainer;
};

export default withOpen;
