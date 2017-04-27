import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';
import NumberInput from '@quoine/components/NumberInput';

import Field from 'components/Transfer/Field';

import styles from './styles.css';

const FuturesBalanceForm = (props) => (
  <form className={styles.main} onSubmit={props.onSubmit}>
    <div className={styles.item}>
      <Field label={translate('futures-balance:quantity')}>
        <NumberInput
          value={props.quantity}
          onChange={props.onChange}
          border required
        />
      </Field>
    </div>

    {props.success ? (
      <p className={styles.success}>
        {translate('futures-balance:success')}
      </p>
    ) : null}

    {props.error ? (
      <p className={styles.error}>
        {translate(props.error)}
      </p>
    ) : null}

    <div className={styles.item}>
      <Button
        type="submit"
        busy={props.busy}
        styleName={`text full large ${
          props.type === 'fund' ? 'positive-bg' : 'negative-bg'
        }`}
      >
        {translate(`futures-balance:action-${props.type}`)}
      </Button>
    </div>
  </form>
);

FuturesBalanceForm.propTypes = {
  type: PropTypes.oneOf(['fund', 'withdrawal']),
  // ===
  quantity: PropTypes.string.isRequired,
  busy: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
  success: PropTypes.bool.isRequired,
  // ===
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FuturesBalanceForm;
