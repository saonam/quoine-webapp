import React from 'react';
import ReactSelect from 'react-select';

import Icon from '../Icon';

import styles from './styles.css';

const Select = ({ searchable, ...others }) => (
  <div className={styles.main}>
    <ReactSelect
      className={styles.select}
      simpleValue
      clearable={false}
      searchable={searchable}
      {...others}
    />
    <div className={styles.icon}>
      <Icon glyph="more" />
    </div>
  </div>
);

Select.propTypes = {
  searchable: React.PropTypes.bool,
};

Select.defaultProps = {
  searchable: false,
};

export default Select;
