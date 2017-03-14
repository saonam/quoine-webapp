import React from 'react';

import Common from './Common';
import Indi from './Indi';
import Corp from './Corp';

import styles from './styles.css';

const SignUpBody4JpReview = ({ form }) => (
  <div className={styles.main}>
    <Common form={form} />
    {form.type === 'individual' ? (
      <Indi form={form.jpIndi} />
    ) : (
      <Corp form={form.jpCorp} />
    )}
  </div>
);

SignUpBody4JpReview.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReview;
