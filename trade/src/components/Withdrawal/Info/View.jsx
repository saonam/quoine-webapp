import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Money from '@quoine/components/Money';
import Color from '@quoine/components/Color';

import styles from './styles.css';

const WdrInfoView = ({ form, infos }) => {
  const info = infos[form.account];
  if (!info) { return null; }
  if (form.account === 'INR' && form.INRTransfer === 'International wire') {
    info.maximum = 1000000;
  }
  return (
    <div className={styles.main}>
      <p>
        <Color styleName="primary-3">
          {translate('withdrawal:minimum')}
          <span>:&nbsp;</span>
        </Color>
        <Money currency={form.account} value={info.minimum} />
      </p>
      <p>
        <Color styleName="primary-3">
          {translate('withdrawal:maximum')}
          <span>:&nbsp;</span>
        </Color>
        {info.maximum ? (
          <Money currency={form.account} value={info.maximum} />
        ) : translate('withdrawal:none')}
      </p>
      <p>
        <Color styleName="primary-3">
          {translate('withdrawal:fee')}
          <span>:&nbsp;</span>
        </Color>
        <Money currency={form.account} value={info.fee} />
        <span>&nbsp;</span>
        <Color styleName="primary-3">
          {translate('withdrawal:fee-help')}
        </Color>
      </p>
    </div>
  );
};

WdrInfoView.propTypes = {
  form: PropTypes.shape({
    account: PropTypes.string.isRequired,
  }).isRequired,
  infos: PropTypes.objectOf(
    PropTypes.shape({
      fee: PropTypes.number,
      minimum: PropTypes.number,
      maximum: PropTypes.number,
    }),
  ).isRequired,
};

export default WdrInfoView;
