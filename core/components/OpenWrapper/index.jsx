import PropTypes from 'prop-types';
import React from 'react';

class OpenWrapper extends React.PureComponent {
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
    const { Element, ...others } = this.props;
    return (
      <Element
        open={this.state.open} onOpen={this.onOpen} onClose={this.onClose}
        {...others}
      />
    );
  }
}

OpenWrapper.propTypes = {
  Element: PropTypes.func.isRequired,
};

export default OpenWrapper;
