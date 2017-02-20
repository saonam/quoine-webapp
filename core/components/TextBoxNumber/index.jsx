import React from 'react';

import View from './View';

class TextBoxNumber extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { focus: false };
    this.onFocus = this.onSetFocus.bind(this, true);
    this.onBlur = this.onSetFocus.bind(this, false);
    this.onChange = this.onChange.bind(this);
    this.onPlus = this.onStep.bind(this, 1);
    this.onMinus = this.onStep.bind(this, -1);
  }
  // ===
  onSetFocus(focus) {
    this.setState({ focus });
  }
  onChange(e) {
    this.props.onChange(e);
  }
  onStep(direction) {
    const prevValue = Number(this.props.value);
    const value = prevValue + (direction * 1);
    this.onChange({ target: { value: String(value) } });
  }
  render() {
    return (
      <View
        value={this.props.value}
        onChange={this.onChange}
        onMinus={this.onMinus}
        onPlus={this.onPlus}
        // ===
        focus={this.state.focus}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
      />
    );
  }
}

TextBoxNumber.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default TextBoxNumber;
