import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Bank from 'components/WdrBank';
import { Quantity, Address, Code, INRTransfer } from 'components/Withdrawal/Input';

import styles from './styles.css';

const WdrFormView = ({ form, onChange, busy, onSubmit, error }) => (
  <form className={styles.main} onSubmit={onSubmit}>

    <div className={styles.item}>
      {form.type === 'fiat' ? (
        <Bank />
      ) : (
        <Address form={form} onChange={onChange} />
      )}
    </div>

    <div className={styles.item}>
      <Quantity form={form} onChange={onChange} />
    </div>

    {form.account === 'INR' ? (
      <div className={styles.item}>
        <INRTransfer form={form} onChange={onChange} />
      </div>
    ) : null}

    <div className={styles.item}>
      <Code form={form} onChange={onChange} />
    </div>

    {error && error.action === 'submit' ? (
      <div className={styles.error}>
        {translate(error.message)}
      </div>
    ) : null}

    <div className={styles.item}>
      <ButtonWLoading
        styleName="full text large negative-bg"
        busy={busy}
        type="submit"
      >
        {translate('withdrawal:submit')}
      </ButtonWLoading>
    </div>

  </form>
);

WdrFormView.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  busy: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({
      action: React.PropTypes.string,
    }),
  ]).isRequired,
};

export default WdrFormView;
