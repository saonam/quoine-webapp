import React from 'react';

import RadioInput from '@quoine/components/RadioInput';

import styles from './styles.css';

// use children for label to allow complex label (eg: with link)
const RadiosInput = ({ id, value, options, onChange, ...others }) => (
  <div className={styles.main} >
    {options.map((option) => (
      <div key={option.value} className={styles.option}>
        <RadioInput
          name={id}
          value={value}
          option={option.value}
          onChange={onChange}
          checked={value === option.value}
          {...others}
        >
          {option.label}
        </RadioInput>
      </div>
    ))}
  </div>
);

RadiosInput.propTypes = {
  id: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
  })).isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default RadiosInput;
