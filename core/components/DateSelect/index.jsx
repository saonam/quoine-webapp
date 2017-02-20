import React from 'react';

import View from './View';

const parseValue = (value) => {
  const obj = new Date(value * 1000);
  return {
    year: `${obj.getFullYear()}`,
    month: `${obj.getMonth() + 1}`,
    date: `${obj.getDate()}`,
  };
};

class DateSelect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onYearChange = this.onBaseChange.bind(this, 'setFullYear');
    this.onMonthChange = this.onBaseChange.bind(this, 'setMonth');
    this.onDateChange = this.onBaseChange.bind(this, 'setDate');
  }
  onBaseChange(onSetKey, event) {
    const dateObj = new Date(this.props.value * 1000);
    const value = Number(event.target.value);
    dateObj[onSetKey](onSetKey === 'setMonth' ? value - 1 : value);
    const nextValue = Math.round(dateObj.getTime() / 1000);
    this.props.onChange({ target: { value: nextValue } });
  }
  render() {
    const { year, month, date } = parseValue(this.props.value);
    return (
      <View
        year={year} onYearChange={this.onYearChange}
        month={month} onMonthChange={this.onMonthChange}
        date={date} onDateChange={this.onDateChange}
      />
    );
  }
}

DateSelect.propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default DateSelect;
