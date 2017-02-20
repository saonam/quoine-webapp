import React from 'react';

import translate from '@quoine/translate';

import InfoInline from '@quoine/components/InfoInline';

import Id from '../Id';
import Time from '../Time';
import Bank from '../Bank';
import Quantity from '../Quantity';
import Address from '../Address';

import styles from './styles.css';

const WdrItemDetail = ({ withdrawal }) => (
  <div className={styles.main}>
    <div>
      <InfoInline label={translate('withdrawal:id')}>
        <Id withdrawal={withdrawal} />
      </InfoInline>
    </div>
    <div>
      <InfoInline label={translate('withdrawal:time')}>
        <Time withdrawal={withdrawal} type="full" />
      </InfoInline>
    </div>
    <div>
      <InfoInline label={translate('withdrawal:quantity')}>
        <Quantity withdrawal={withdrawal} />
      </InfoInline>
    </div>
    <div>
      {withdrawal.type === 'fiat' ? (
        <InfoInline label={translate('withdrawal:bank')}>
          <Bank withdrawal={withdrawal} />
        </InfoInline>
      ) : (
        <InfoInline label={translate('withdrawal:address', { currency: withdrawal.account })}>
          <Address withdrawal={withdrawal} />
        </InfoInline>
      )}
    </div>
  </div>
);

WdrItemDetail.propTypes = {
  withdrawal: React.PropTypes.shape({}).isRequired,
};

export default WdrItemDetail;
