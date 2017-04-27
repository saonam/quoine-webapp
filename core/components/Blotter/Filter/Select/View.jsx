import PropTypes from 'prop-types';
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
  name: PropTypes.string.isRequired,
  namespace: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BlotterFilterSelectView;
