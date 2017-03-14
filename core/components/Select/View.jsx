import React from 'react';
import ReactSelect from 'react-select';

import translate from '@quoine/translate';

import Icon from '../Icon';

import styles from './styles.css';

const Select = ({ searchable, placeholder, ...others }) => (
  <div className={styles.main}>
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

Select.propTypes = {
  searchable: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
};

Select.defaultProps = {
  searchable: false,
};

export default Select;
