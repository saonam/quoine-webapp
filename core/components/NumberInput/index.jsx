import React from 'react';

import View from './View';

class NumberInput extends React.PureComponent {
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
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  onStep(direction) {
    const prevValue = Number(this.props.value);
    const value = prevValue + (direction * 1);
    this.onChange({ target: { value: String(value) } });
  }
  render() {
    return (
      <View
        {...this.props}
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

NumberInput.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default NumberInput;
