import PropTypes from 'prop-types';
import React from 'react';

import Field from '@quoine/components/Field';

import styles from './styles.css';

const UserFormField = ({ label, children, layout }) => (
  label ? (
    <Field
      label={<h1 className={styles.label}>{label}</h1>}
      layout={layout}
    >
      <div className={styles.children}>
        {children}
      </div>
    </Field>
  ) : (
    <div className={styles.children}>
      {children}
    </div>
  )
);

UserFormField.propTypes = {
  label: PropTypes.string,
  layout: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default UserFormField;
