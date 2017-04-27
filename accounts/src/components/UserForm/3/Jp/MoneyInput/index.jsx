import PropTypes from 'prop-types';
import React from 'react';

import SelectInput from '@quoine/components/SelectInput';

const options = [
  '30万円未満', '30万円～100万円未満', '100万円～250万円未満',
  '250万円～500万円未満', '500万円～1000万円未満', '1000万円～2500万円未満',
  '2500万円～5000万円未満', '5000万円～1億円未満', '1億円以上',
].map(value => ({ label: value, value }));

const JpMoneyInput = ({ value, onChange, ...others }) => (
  <SelectInput
    value={value}
    onChange={onChange}
    options={options}
    searchable
    {...others}
  />
);

JpMoneyInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default JpMoneyInput;
