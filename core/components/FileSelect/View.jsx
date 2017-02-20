import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const FileSelectView = ({ id, value, onChange }) => (
  <div>
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

FileSelectView.propTypes = {
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.shape({}),
  onChange: React.PropTypes.func.isRequired,
};

export default FileSelectView;
