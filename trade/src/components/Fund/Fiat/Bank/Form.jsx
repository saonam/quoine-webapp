import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';
import Button from '@quoine/components/Button';

import { Amount, Bank, Notes, INRTransfer } from 'components/Fund/Input';

import styles from './styles.css';

const FundFiatBankForm = ({
  form, onChange, busy, onSubmit, onClose, error,
}) => (
  <form onSubmit={onSubmit}>

    <p className={styles.item}>
      <span>{translate('fund-bank:help-1')}</span>
      <Button styleName="inline text primary-3" onClick={onClose}>
        {translate('fund-bank:open')}
      </Button>
    </p>

    <div className={styles.item}>
      <Bank form={form} onChange={onChange} />
    </div>

    <div className={styles.item}>
      <Amount form={form} onChange={onChange} />
    </div>

    {form.account === 'INR' ? (
      <div className={styles.item}>
        <INRTransfer form={form} onChange={onChange} />
      </div>
    ) : null}

    <div className={styles.item}>
      <Notes form={form} onChange={onChange} />
    </div>

    {error ? (
      <p className={styles.error}>
        {translate(error.message)}
      </p>
    ) : null}

    <div className={styles.buttons}>
      <div className={styles.button}>
        <ButtonWLoading
          styleName="full text large accent-bg"
          busy={busy}
          type="submit"
        >
          {translate('fund-bank:submit')}
        </ButtonWLoading>
      </div>
      <div className={styles.button}>
        <Button styleName="full text large primary-3" onClick={onClose}>
          {translate('fund-bank:cancel')}
        </Button>
      </div>
    </div>
  </form>
);

FundFiatBankForm.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  busy: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  // ===
  onClose: React.PropTypes.func.isRequired,
  // ===
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({}),
  ]).isRequired,
};

export default FundFiatBankForm;
