import React from 'react';

import View from './View';

class DateInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = {
      year: this.onBaseChange.bind(this, 'setFullYear'),
      month: this.onBaseChange.bind(this, 'setMonth'),
      date: this.onBaseChange.bind(this, 'setDate'),
    };
  }
  onBaseChange(onSetKey, baseValue) {
    const dateObj = new Date(this.props.value * 1000);
    const value = Number(baseValue);
    dateObj[onSetKey](onSetKey === 'setMonth' ? value - 1 : value);
    const nextValue = Math.round(dateObj.getTime() / 1000);
    this.props.onChange(nextValue);
  }
  render() {
    return (
      <View {...this.props} onChange={this.onChange} />
    );
  }
}

DateInput.propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default DateInput;
