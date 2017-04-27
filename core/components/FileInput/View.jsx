import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const FileInputView = ({ id, value, onChange, border }) => (
  <div className={border ? styles.border : ''}>
    <input id={id} hidden type="file" onChange={onChange} />
    <label htmlFor={id}>
      <span className={styles.button}>
        {translate('file:choose')}
      </span>
      <span className={styles.name}>
        {value ? value.name : translate('file:none')}
      </span>
    </label>
  </div>
);

FileInputView.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.shape({}),
  onChange: PropTypes.func.isRequired,
  border: PropTypes.bool,
};

export default FileInputView;
