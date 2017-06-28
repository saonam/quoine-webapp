import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Bank from 'components/WdrBank';
import {
  Quantity, Address, Code, INRTransfer, PaymentId, Message, DestinationTag,
} from 'components/Withdrawal/Input';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const WdrFormView = ({ form, onChange, busy, onSubmit, error, showMessage, onDismiss }) => (
  <form className={styles.main} onSubmit={onSubmit}>

    <div className={styles.item}>
      {form.type === 'fiat' ? (
        <Bank />
      ) : (
        <Address form={form} onChange={onChange} />
      )}
    </div>

    {form.account === 'XMR' ? (
      <div className={styles.item}>
        <PaymentId form={form} onChange={onChange} />
      </div>
    ) : null}

    {form.account === 'XEM' ? (
      <div className={styles.item}>
        <Message form={form} onChange={onChange} />
      </div>
    ) : null}

    {form.account === 'XRP' ? (
      <div className={styles.item}>
        <DestinationTag form={form} onChange={onChange} />
      </div>
    ) : null}

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

    {showMessage ? (
      <div className={styles.item}>
        <p className={styles.message}>
          {translate('withdrawal:check-email-message')}
        </p>
        <Button
          type="button"
          styleName="full large text primary-3-bg"
          onClick={onDismiss} autoFocus={false}
          className={styles.confirm}
        >
          {translate('withdrawal:dismiss')}
        </Button>
      </div>
    ) : (
      <div className={styles.item}>
        <ButtonWLoading
          type="submit"
          styleName="full text large negative-bg"
          busy={busy}
        >
          {translate('withdrawal:submit')}
        </ButtonWLoading>
      </div>
    )}

  </form>
);

WdrFormView.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  busy: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.string,
    }),
  ]).isRequired,
  // ===
  showMessage: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default WdrFormView;
