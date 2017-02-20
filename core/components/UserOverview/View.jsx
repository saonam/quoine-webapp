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
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    email: React.PropTypes.string,
  }),
};

export default UserOverview;
