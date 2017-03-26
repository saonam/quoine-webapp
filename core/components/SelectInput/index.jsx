import React from 'react';
import ReactSelect from 'react-select';

import translate from '@quoine/translate';

import Icon from '@quoine/components/Icon';

import styles from './styles.css';

const SelectInput = ({ searchable, placeholder, border, ...others }) => (
  <div className={`${styles.main} ${border ? styles.border : ''}`}>
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
  searchable: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  border: React.PropTypes.bool,
};

SelectInput.defaultProps = {
  searchable: false,
};

export default SelectInput;
