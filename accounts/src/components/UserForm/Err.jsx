import PropTypes from 'prop-types';
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
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
};

export default UserFormErr;
