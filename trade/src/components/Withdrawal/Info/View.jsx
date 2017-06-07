import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Money from '@quoine/components/Money';
import Color from '@quoine/components/Color';

import styles from './styles.css';

const links = {
  quoine: {
    en: 'https://quoine.zendesk.com/hc/en-us/articles/218199498-What-is-the-daily-withdrawal-limit-for-fiat-and-crypto-currencies-',
    ja: 'https://quoine.zendesk.com/hc/ja/articles/218199498',
  },
  qryptos: {
    en: 'https://qryptos.zendesk.com/hc/en-us/articles/115007862567-Withdrawal-limits',
  },
  traders: {
    en: '',
  },
};
const getLink = (language) => {
  const vendorLinks = links[process.env.REACT_APP_VENDOR];
  return vendorLinks[language] || vendorLinks.en;
};

const WdrInfoView = ({ form, infos, language }) => {
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
        ) : (
          <a
            className={styles.link} rel="noopener noreferrer"
            href={getLink(language)} target="_blank"
          >
            {translate('withdrawal:faq')}
          </a>
        )}
      </p>
      {process.env.REACT_APP_VENDOR !== 'qryptos' ? (
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
      ) : null}
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
  language: PropTypes.string.isRequired,
};

export default WdrInfoView;
