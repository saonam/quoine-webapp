import React from 'react';

import Field from '@quoine/components/Field';

import styles from './styles.css';

const TransferField = ({ label, children }) => (
  <Field label={label} labelStyle="uppercase semi-bold small">
    <div className={styles.children}>
      {children}
    </div>
  </Field>
);

TransferField.propTypes = {
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default TransferField;
