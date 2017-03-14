import React from 'react';

import Radios from '@quoine/components/Radios';

const JpGenderSelect = ({ value, onChange }) => (
  <Radios
    id="gender"
    value={value}
    onChange={onChange}
    options={[
      { value: '男性', label: '男性' },
      { value: '女性', label: '女性' },
    ]}
    required
  />
);

JpGenderSelect.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default JpGenderSelect;
