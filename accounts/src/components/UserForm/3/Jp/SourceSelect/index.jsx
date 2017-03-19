import React from 'react';

import Select from '@quoine/components/Select';

const options = [
  '給与所得', '事業所得', '利子・配当・投資収益', '年金・恩給', '所得なし',
].map(value => ({ label: value, value }));

const JpSourceSelect = ({ value, onChange }) => (
  <Select value={value} onChange={onChange} options={options} searchable required />
);

JpSourceSelect.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default JpSourceSelect;
