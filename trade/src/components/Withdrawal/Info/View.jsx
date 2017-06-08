import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Money from '@quoine/components/Money';
import Color from '@quoine/components/Color';

import styles from './styles.css';

import getFaqLink from './getFaqLink';

const WdrInfoView = ({ form, infos, language }) => {
  const info = infos[form.account];
  if (!info) { return null; }

  let maximum = (<span>{translate('withdrawal:none')}</span>);

  if (form.account === 'INR' && form.INRTransfer === 'International wire') {
    maximum = (<Money currency={form.account} value={1000000} />);
  }

  const faqLink = getFaqLink(language);
  if (form.account !== 'INR' && faqLink) {
    maximum = (
      <a
        className={styles.link} rel="noopener noreferrer"
        href={faqLink} target="_blank"
      >
        {translate('withdrawal:faq')}
      </a>
    );
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
        {maximum}
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
    }),
  ).isRequired,
  language: PropTypes.string.isRequired,
};

export default WdrInfoView;
