import PropTypes from 'prop-types';
import React from 'react';

import SelectInput from '@quoine/components/SelectInput';

const options = [
  '給与所得', '事業所得', '利子・配当・投資収益', '年金・恩給', '所得なし',
].map(value => ({ label: value, value }));

const JpSourceInput = ({ value, onChange, ...others }) => (
  <SelectInput
    value={value} onChange={onChange}
    options={options} searchable
    {...others}
  />
);

JpSourceInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default JpSourceInput;
