/*
  Note: this file is wide (line lenght is long) and long (many lines)
  but it's okay to keep the simple of this file
 */

import React from 'react';

import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBox from '@quoine/components/TextBox';
import Checkbox from '@quoine/components/Checkbox';

import styles from './styles.css';

const AffiliateCode = ({ form, onChange }) => (
  <div className={styles.input}>
    <Input large id="affiliate-code" label={translate('sign-up:input-affiliate-code')}>
      <TextBox autoFocus type="text" value={form.affiliateCode} onChange={onChange.affiliateCode} />
    </Input>
  </div>
);

const tradeHost = process.env.REACT_APP_TRADE_HOST;
const signupLink = tradeHost === 'https://bttrader.min-btc.com/' ? translate('sign-up:input-accept-terms-traders') : translate('sign-up:input-accept-terms');

const AcceptTerms = ({ form, onChange }) => (
  <div className={styles.input}>
    <Checkbox id="accept-terms" value={form.acceptTerms} onChange={onChange.acceptTerms}>
      <span
        className={styles.termsText}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: signupLink,
        }}
      />
    </Checkbox>
  </div>
);

const Body4 = ({ form, onChange }) => (
  <div>
    <AffiliateCode form={form} onChange={onChange} />
    <AcceptTerms form={form} onChange={onChange} />
  </div>
);

Body4.propTypes = {
  form: React.PropTypes.shape({
    affiliateCode: React.PropTypes.string.isRequired,
    acceptTerms: React.PropTypes.bool.isRequired,
  }).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

AffiliateCode.propTypes = AcceptTerms.propTypes = Body4.propTypes;

export default Body4;
