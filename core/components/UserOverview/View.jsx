import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const UserOverview = ({ user }) => (
  user ? (
    <div className={styles.main}>
      <h1 className={styles.name}>{user.name}</h1>
      <h1 className={styles.email}>{user.email}</h1>
    </div>
  ) : null
);

UserOverview.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

export default UserOverview;
