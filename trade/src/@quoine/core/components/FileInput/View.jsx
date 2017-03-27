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
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.shape({}),
  onChange: React.PropTypes.func.isRequired,
  border: React.PropTypes.bool,
};

export default FileInputView;
