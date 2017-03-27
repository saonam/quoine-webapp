import React from 'react';

class TogglerWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.onToggle = this.onToggle.bind(this);
  }
  onToggle() {
    this.setState({ open: !this.state.open });
  }
  render() {
    const { Element, ...others } = this.props;
    return (
      <Element
        open={this.state.open}
        onToggle={this.onToggle}
        {...others}
      />
    );
  }
}

TogglerWrapper.propTypes = {
  Element: React.PropTypes.func.isRequired,
};

export default TogglerWrapper;
