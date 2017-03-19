import React from 'react';

import UserInfo from 'components/UserInfo';

import Group from './Group';
import Item from './Item';

import styles from './styles.css';

const UserForm4JpReview = ({ form }) => (
  <div className={styles.main}>
    <UserInfo info={form} Group={Group} Item={Item} />
  </div>
);

UserForm4JpReview.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
};

export default UserForm4JpReview;
