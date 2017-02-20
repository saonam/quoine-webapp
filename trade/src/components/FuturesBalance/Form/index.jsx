import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';
import Input from '@quoine/components/Input';
import TextBoxNumber from '@quoine/components/TextBoxNumber';

import styles from './styles.css';

const FuturesBalanceForm = (props) => (
  <form className={styles.main} onSubmit={props.onSubmit}>
    <div className={styles.item}>
      <Input
        id="futures-balance-quantity"
        label={translate('futures-balance:quantity')}
      >
        <TextBoxNumber
          value={props.quantity}
          onChange={props.onChange}
        />
      </Input>
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
  type: React.PropTypes.oneOf(['fund', 'withdrawal']),
  // ===
  quantity: React.PropTypes.string.isRequired,
  busy: React.PropTypes.bool.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
  ]).isRequired,
  success: React.PropTypes.bool.isRequired,
  // ===
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default FuturesBalanceForm;
