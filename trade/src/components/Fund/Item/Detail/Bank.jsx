import React from 'react';

import translate from '@quoine/translate';

import InfoInline from '@quoine/components/InfoInline';

import Id from '../Id';
import Time from '../Time';
import Bank from '../Bank';
import Amount from '../Amount';
import Notes from '../Notes';

import styles from './styles.css';

const FundItemDetailBank = ({ fund }) => (
  <div className={styles.main}>
    <div>
      <InfoInline label={translate('fund:id')}>
        <Id fund={fund} />
      </InfoInline>
    </div>
    <div>
      <InfoInline label={translate('fund:time')}>
        <Time fund={fund} type="full" />
      </InfoInline>
    </div>
    <div>
      <InfoInline label={translate('fund:amount')}>
        <Amount fund={fund} />
      </InfoInline>
    </div>
    <div>
      <InfoInline label={translate('fund:bank')}>
        <Bank fund={fund} />
      </InfoInline>
    </div>
    <div>
      <InfoInline label={translate('fund:notes')}>
        <Notes fund={fund} />
      </InfoInline>
    </div>
  </div>
);

FundItemDetailBank.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItemDetailBank;
