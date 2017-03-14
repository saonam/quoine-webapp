import React from 'react';

import Radio from '@quoine/components/Radio';

import styles from './styles.css';

// use children for label to allow complex label (eg: with link)
const RadiosView = ({ id, value, options, onChange, ...others }) => (
  <div className={styles.main} >
    {options.map((option) => (
      <div key={option.value} className={styles.option}>
        <Radio
          name={id}
          value={value}
          option={option.value}
          onChange={onChange}
          {...others}
        >
          {option.label}
        </Radio>
      </div>
    ))}
  </div>
);

RadiosView.propTypes = {
  id: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
  })).isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default RadiosView;
