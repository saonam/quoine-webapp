import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const OrderEntryFormType = ({ form, onClick, value }) => {
  const selected = value === form.type;
  return (
    <Button
      styleName={`text inline ${
        selected ? 'inverse' : 'inverse-light'
      }`}
      className={styles.main}
      onClick={onClick} disabled={selected}
    >
      {translate(`order:type-${value}`)}
    </Button>
  );
};

OrderEntryFormType.propTypes = {
  form: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }),
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default OrderEntryFormType;
