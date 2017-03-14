import React from 'react';

import Select from '@quoine/components/Select';

const options = [
  '30万円未満', '30万円～100万円未満', '100万円～250万円未満',
  '250万円～500万円未満', '500万円～1000万円未満', '1000万円～2500万円未満',
  '2500万円～5000万円未満', '5000万円～1億円未満', '1億円以上',
].map(value => ({ label: value, value }));

const JpMoneySelect = ({ value, onChange }) => (
  <Select value={value} onChange={onChange} options={options} searchable required />
);

JpMoneySelect.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default JpMoneySelect;
