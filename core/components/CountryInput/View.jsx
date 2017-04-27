import PropTypes from 'prop-types';
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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CountryInputView;
