import React from 'react';

import SelectInput from '@quoine/components/SelectInput';

import styles from './styles.css';

import { getYearOptions, getMonthOptions, getDateOptions } from './getOptions';
import parseValue from './parseValue';

const DateInput = ({ value: raw, onChange, date, month, year, ...others }) => {
  const value = parseValue(raw);
  return (
    <div className={styles.main}>
      {year ? (
        <div className={styles.input}>
          <SelectInput
            {...others}
            value={value.year} onChange={onChange.year}
            options={getYearOptions()} searchable
          />
        </div>
      ) : null}
      {month ? (
        <div className={styles.month}>
          <SelectInput
            {...others}
            value={value.month} onChange={onChange.month}
            options={getMonthOptions()} searchable
          />
        </div>
      ) : null}
      {date ? (
        <div className={styles.input}>
          <SelectInput
            {...others}
            value={value.date} onChange={onChange.date}
            options={getDateOptions()} searchable
          />
        </div>
      ) : null}
    </div>
  );
};

DateInput.propTypes = {
  value: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.shape({}).isRequired,
  date: React.PropTypes.bool,
  month: React.PropTypes.bool,
  year: React.PropTypes.bool,
};

DateInput.defaultProps = {
  date: true,
  month: true,
  year: true,
};

export default DateInput;
