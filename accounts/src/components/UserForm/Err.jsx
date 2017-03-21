import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const UserFormErr = ({ error }) => (
  error ? (
    <div className={styles.error}>
      {translate(error.message)}
    </div>
  ) : null
);


UserFormErr.propTypes = {
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({}),
  ]).isRequired,
};

export default UserFormErr;
