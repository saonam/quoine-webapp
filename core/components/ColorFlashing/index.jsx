import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class ColorFlashing extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { flash: 'static' };
    this.resetFlash = this.resetFlash.bind(this);
    this.timeoutId = null;
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        flash: this.props.value < nextProps.value ? 'positive' : 'negative',
      });
    }
  }
  componentDidUpdate() {
    if (this.state.flash !== 'static') {
      this.timeoutId = setTimeout(this.resetFlash, 300);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }
  resetFlash() {
    this.setState({ flash: 'static' });
  }
  render() {
    return (
      <View flash={this.state.flash} block={this.props.block}>
        {this.props.children}
      </View>
    );
  }
}

ColorFlashing.propTypes = {
  value: PropTypes.number,
  children: View.propTypes.children,
  block: View.propTypes.block,
};

export default ColorFlashing;
