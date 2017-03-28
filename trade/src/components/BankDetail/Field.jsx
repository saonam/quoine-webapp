import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

import styles from './styles.css';

const BankDetailItemField = ({ id, children }) => (
  <div className={styles.item}>
    <Field
      label={(
        <h1 className={styles.label}>{translate(`bank:${id}`)}</h1>
      )}
    >
      <div className={styles.children}>
        {children}
      </div>
    </Field>
  </div>
);

BankDetailItemField.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default BankDetailItemField;
