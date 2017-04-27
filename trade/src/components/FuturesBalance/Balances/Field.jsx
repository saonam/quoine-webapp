import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

import styles from './styles.css';

const FuturesBalanceBalancesField = ({ id, children }) => (
  <Field
    label={(
      <h1 className={styles.label}>
        {id ? translate(`futures-balance:${id}`) : ' '}
      </h1>
    )}
  >
    <div className={styles.children}>
      {children}
    </div>
  </Field>
);

FuturesBalanceBalancesField.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default FuturesBalanceBalancesField;
