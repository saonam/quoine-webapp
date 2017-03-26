import React from 'react';

import SelectInput from '@quoine/components/SelectInput';

const CountryInputView = ({ countries, value, onChange, ...others }) => (
  <SelectInput
    {...others}
    options={countries.map(country => ({
      label: country.name, value: country.iso,
    }))}
    value={value}
    onChange={onChange}
    searchable
  />
);

CountryInputView.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  countries: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default CountryInputView;
