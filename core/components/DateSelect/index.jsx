import React from 'react';

import View from './View';

class DateSelect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = {
      year: this.onBaseChange.bind(this, 'setFullYear'),
      month: this.onBaseChange.bind(this, 'setMonth'),
      date: this.onBaseChange.bind(this, 'setDate'),
    };
  }
  onBaseChange(onSetKey, event) {
    const dateObj = new Date(this.props.value * 1000);
    const value = Number(event.target.value);
    dateObj[onSetKey](onSetKey === 'setMonth' ? value - 1 : value);
    const nextValue = Math.round(dateObj.getTime() / 1000);
    this.props.onChange({ target: { value: nextValue } });
  }
  render() {
    return (
      <View {...this.props} onChange={this.onChange} />
    );
  }
}

DateSelect.propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default DateSelect;
