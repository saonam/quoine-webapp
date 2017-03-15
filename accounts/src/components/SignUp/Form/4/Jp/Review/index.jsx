import React from 'react';

import UserInfo from 'components/UserInfo';

import Group from './Group';
import Item from './Item';

import styles from './styles.css';

const SignUpBody4JpReview = ({ form }) => (
  <div className={styles.main}>
    <UserInfo info={form} Group={Group} Item={Item} />
  </div>
);

SignUpBody4JpReview.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReview;
