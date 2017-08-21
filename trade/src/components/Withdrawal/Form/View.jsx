import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Button from '@quoine/components/Button';

import Bank from 'components/WdrBank';
import AddressWhiteList from 'components/WdrAddress';
import {
  Quantity,
  Address as AddressTextInput,
  Code,
  INRTransfer,
  PaymentId,
  Message,
  DestinationTag,
  MemoType,
  MemoText,
  MemoId,
  MemoHash,
} from 'components/Withdrawal/Input';

import styles from './styles.css';

const WdrFormView = ({
  form, onChange, busy, onSubmit, error,
  showMessage, onDismiss,
}) => {
  const address = process.env.REACT_APP_VENDOR === 'quoine' ? (
    <AddressWhiteList account={form.account} />
  ) : (
    <AddressTextInput form={form} onChange={onChange} />
  );

  return (
    <form className={styles.main} onSubmit={onSubmit}>

      <div className={styles.item}>
        {form.type === 'fiat' ? (
          <Bank />
        ) : (
          address
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

      {form.account === 'XLM' ? (
        <div className={styles.item}>
          <MemoType form={form} onChange={onChange} />
        </div>
      ) : null}

      {form.account === 'XLM' && form.memoType === 'memo_text' ? (
        <div className={styles.item}>
          <MemoText form={form} onChange={onChange} />
        </div>
      ) : null}

      {form.account === 'XLM' && form.memoType === 'memo_id' ? (
        <div className={styles.item}>
          <MemoId form={form} onChange={onChange} />
        </div>
      ) : null}

      {form.account === 'XLM' && form.memoType === 'memo_hash' ? (
        <div className={styles.item}>
          <MemoHash form={form} onChange={onChange} />
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
            styleName="full large text primary-4-bg"
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
};

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
