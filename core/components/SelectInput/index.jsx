import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';

import translate from '@quoine/translate';

import Icon from '@quoine/components/Icon';

import styles from './styles.css';

const getBorderClass = (border) => {
  if (border === 2) { return styles.borderLarge; }
  if (border) { return styles.border; }
  return '';
};

const SelectInput = ({ searchable, placeholder, border, ...others }) => (
  <div className={`${styles.main} ${getBorderClass(border)}`}>
    <ReactSelect
      className={styles.select}
      simpleValue
      clearable={false}
      searchable={searchable}
      placeholder={placeholder || translate('input:select-placeholder')}
      {...others}
    />
    <div className={styles.icon}>
      <Icon glyph="more" />
    </div>
  </div>
);

SelectInput.propTypes = {
  searchable: PropTypes.bool,
  placeholder: PropTypes.string,
  border: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
};

SelectInput.defaultProps = {
  searchable: false,
};

export default SelectInput;
