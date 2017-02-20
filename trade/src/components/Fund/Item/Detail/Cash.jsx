import React from 'react';

import translate from '@quoine/translate';

import InfoInline from '@quoine/components/InfoInline';

import Time from '../Time';
import Amount from '../Amount';
import Guide from '../Guide';
import Deadline from '../Deadline';

import styles from './styles.css';

const FundItemDetailCash = ({ fund }) => (
  <div className={styles.main}>
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
      <InfoInline label={translate('fund:guide')}>
        <Guide fund={fund} />
      </InfoInline>
    </div>
    <div>
      <InfoInline label={translate('fund:deadline')}>
        <Deadline fund={fund} />
      </InfoInline>
    </div>
  </div>
);

FundItemDetailCash.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItemDetailCash;
