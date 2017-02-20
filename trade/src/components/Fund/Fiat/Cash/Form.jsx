import React from 'react';

import translate from '@quoine/translate';

import ButtonWLoading from '@quoine/components/ButtonWLoading';

import { Amount } from 'components/Fund/Input';

import styles from './styles.css';

const FundFiatCashForm = ({ form, onChange, busy, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <div className={styles.item}>
      <Amount form={form} onChange={onChange} />
    </div>
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
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  busy: React.PropTypes.bool.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default FundFiatCashForm;
