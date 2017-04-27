import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

import { Amount } from 'components/Fund/Input';

import styles from './styles.css';

const FundFiatCashForm = ({ form, onChange, busy, onSubmit, error }) => (
  <form onSubmit={onSubmit}>
    <div className={styles.item}>
      <Amount form={form} onChange={onChange} />
    </div>
    {error ? (
      <p className={styles.error}>
        {translate(error.message)}
      </p>
    ) : null}
    <div className={styles.item}>
      <ButtonWLoading
        styleName="full text large accent-bg"
        busy={busy}
        type="submit"
      >
        {translate('fund-cash:submit')}
      </ButtonWLoading>
    </div>
  </form>
);

FundFiatCashForm.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  busy: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  // ===
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
};

export default FundFiatCashForm;
