import React from 'react';

import Select from '../Select';

import styles from './styles.css';

import { getYearOptions, getMonthOptions, getDateOptions } from './getOptions';
import parseValue from './parseValue';

const DateSelect = ({ value: raw, onChange, date, month, year }) => {
  const value = parseValue(raw);
  return (
    <div className={styles.main}>
      {year ? (
        <div className={styles.input}>
          <Select
            value={value.year} onChange={onChange.year}
            options={getYearOptions()} searchable
          />
        </div>
      ) : null}
      {month ? (
        <div className={styles.month}>
          <Select
            value={value.month} onChange={onChange.month}
            options={getMonthOptions()} searchable
          />
        </div>
      ) : null}
      {date ? (
        <div className={styles.input}>
          <Select
            value={value.date} onChange={onChange.date}
            options={getDateOptions()} searchable
          />
        </div>
      ) : null}
    </div>
  );
};

DateSelect.propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
  date: React.PropTypes.bool,
  month: React.PropTypes.bool,
  year: React.PropTypes.bool,
};

DateSelect.defaultProps = {
  date: true,
  month: true,
  year: true,
};

export default DateSelect;
