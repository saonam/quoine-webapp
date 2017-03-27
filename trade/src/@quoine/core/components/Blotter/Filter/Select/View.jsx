import React from 'react';

import translate from '@quoine/translate';

import SelectInput from '@quoine/components/SelectInput';

const BlotterFilterSelectView = ({
  values, current, onChange, namespace, name,
}) => {
  const options = values.map(value => ({
    label: translate(`${namespace}:${name}-${value}`),
    value,
  }));
  return (
    <SelectInput options={options} value={current} onChange={onChange} autosize />
  );
};

BlotterFilterSelectView.propTypes = {
  name: React.PropTypes.string.isRequired,
  namespace: React.PropTypes.string.isRequired,
  current: React.PropTypes.string.isRequired,
  values: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default BlotterFilterSelectView;
