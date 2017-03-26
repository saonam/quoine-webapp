import React from 'react';

import Field from '@quoine/components/Field';

import styles from './styles.css';

const UserFormField = ({ label, children, layout }) => (
  label ? (
    <Field label={label} labelStyle="uppercase semi-bold" layout={layout}>
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
  label: React.PropTypes.string,
  layout: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default UserFormField;
