import React from 'react';

import Select from '../Select';

import styles from './styles.css';

import { getYearOptions, getMonthOptions, getDateOptions } from './getOptions';

const DateSelect = ({
  year, month, date, onYearChange, onMonthChange, onDateChange,
}) => (
  <div className={styles.main}>
    <div className={styles.input}>
      <Select
        value={year} onChange={onYearChange}
        options={getYearOptions()} searchable
      />
    </div>
    <div className={styles.month}>
      <Select
        value={month} onChange={onMonthChange}
        options={getMonthOptions()} searchable
      />
    </div>
    <div className={styles.input}>
      <Select
        value={date} onChange={onDateChange}
        options={getDateOptions()} searchable
      />
    </div>
  </div>
);

DateSelect.propTypes = {
  year: React.PropTypes.string.isRequired,
  month: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  onYearChange: React.PropTypes.func.isRequired,
  onMonthChange: React.PropTypes.func.isRequired,
  onDateChange: React.PropTypes.func.isRequired,
};

export default DateSelect;
