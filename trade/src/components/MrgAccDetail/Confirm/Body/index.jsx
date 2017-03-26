import React from 'react';

import translate from '@quoine/translate';

import ColorBySide from '@quoine/components/ColorBySide';
import Hr from '@quoine/components/Hr';

import Position from 'components/MrgAcc/Position';
import Pnl from 'components/MrgAcc/Pnl';

import Field from 'components/MrgAccDetail/Field';

import styles from './styles.css';

const MrgAccDetailConfirmBody = ({ mrgAcc, side }) => (
  <div className={styles.main}>

    <p className={styles.text}>
      {translate('mrg-acc-close:confirm-description')}
    </p>

    <div className={styles.input}>
      <Field id="account">{mrgAcc.account}</Field>
      <Field id="product">{mrgAcc.product}</Field>
      <Field id="side">
        <ColorBySide side={side}>
          {translate(`mrg-acc:side-${side}`)}
        </ColorBySide>
      </Field>
    </div>

    <Hr />

    <div>
      <Field id="position-total"><Position mrgAcc={mrgAcc} side={side} /></Field>
      <Field id="pnl-total"><Pnl mrgAcc={mrgAcc} side={side} /></Field>
    </div>

  </div>
);

MrgAccDetailConfirmBody.propTypes = {
  mrgAcc: React.PropTypes.shape({}),
  side: React.PropTypes.oneOf(['long', 'short', 'both']).isRequired,
};

export default MrgAccDetailConfirmBody;
