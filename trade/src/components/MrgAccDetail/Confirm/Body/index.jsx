import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoHorizontal';
import ColorBySide from '@quoine/components/ColorBySide';
import Hr from '@quoine/components/Hr';

import Position from 'components/MrgAcc/Position';
import Pnl from 'components/MrgAcc/Pnl';

import styles from './styles.css';

const MrgAccDetailConfirmBody = ({ mrgAcc, side }) => (
  <div className={styles.main}>

    <p className={styles.text}>
      {translate('mrg-acc-close:confirm-description')}
    </p>

    <div className={styles.input}>
      <Info label={translate('mrg-acc:account')}>
        {mrgAcc.account}
      </Info>
      <Info label={translate('mrg-acc:product')}>
        {mrgAcc.product}
      </Info>
      <Info label={translate('mrg-acc:side')}>
        <ColorBySide side={side}>
          {translate(`mrg-acc:side-${side}`)}
        </ColorBySide>
      </Info>
    </div>

    <Hr />

    <div>
      <Info label={translate('mrg-acc:position-total')}>
        <Position mrgAcc={mrgAcc} side={side} />
      </Info>
      <Info label={translate('mrg-acc:pnl-total')}>
        <Pnl mrgAcc={mrgAcc} side={side} />
      </Info>
    </div>

  </div>
);

MrgAccDetailConfirmBody.propTypes = {
  mrgAcc: React.PropTypes.shape({}),
  side: React.PropTypes.oneOf(['long', 'short', 'both']).isRequired,
};

export default MrgAccDetailConfirmBody;
