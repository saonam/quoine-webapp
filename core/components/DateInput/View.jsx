import PropTypes from 'prop-types';
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
  value: PropTypes.number.isRequired,
  onChange: PropTypes.shape({}).isRequired,
  date: PropTypes.bool,
  month: PropTypes.bool,
  year: PropTypes.bool,
};

DateInput.defaultProps = {
  date: true,
  month: true,
  year: true,
};

export default DateInput;
