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
  form: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
  }),
  value: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default OrderEntryFormType;
