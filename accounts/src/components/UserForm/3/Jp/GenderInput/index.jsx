import PropTypes from 'prop-types';
import React from 'react';

import RadiosInput from '@quoine/components/RadiosInput';

const options = [
  { value: '男性', label: '男性' },
  { value: '女性', label: '女性' },
];

const JpGenderInput = ({ value, onChange, required }) => (
  <RadiosInput
    id="gender"
    value={value}
    onChange={onChange}
    options={options}
    required={required}
  />
);

JpGenderInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default JpGenderInput;
