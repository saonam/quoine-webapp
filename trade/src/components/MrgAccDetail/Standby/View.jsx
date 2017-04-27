import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Position from 'components/MrgAcc/Position';
import BaseOpenPrice from 'components/MrgAcc/BaseOpenPrice';
import Pnl from 'components/MrgAcc/Pnl';
import Button from 'components/MrgAccCloseButton';
import Info from 'components/MrgAccDetail/Info';

import Row from './Row';

import styles from './styles.css';

const MrgAccDetailStandbyVertical = ({ mrgAcc }) => (
  <div className={styles.main}>
    <Row
      left={<Info mrgAcc={mrgAcc} Element={Position} side="short" />}
      label={translate('mrg-acc:position')}
      right={<Info mrgAcc={mrgAcc} Element={Position} side="long" />}
    />
    <Row
      left={<Info mrgAcc={mrgAcc} Element={BaseOpenPrice} side="short" />}
      label={translate('mrg-acc:base-open-price')}
      right={<Info mrgAcc={mrgAcc} Element={BaseOpenPrice} side="long" />}
    />
    <Row
      left={<Info mrgAcc={mrgAcc} Element={Pnl} side="short" />}
      label={translate('mrg-acc:pnl')}
      right={<Info mrgAcc={mrgAcc} Element={Pnl} side="long" />}
    />
    <Row
      left={<Button mrgAcc={mrgAcc} side="short" />}
      right={<Button mrgAcc={mrgAcc} side="long" />}
    />
    <div className={styles.button}>
      <Button mrgAcc={mrgAcc} side="both" />
    </div>
  </div>
);

MrgAccDetailStandbyVertical.propTypes = {
  mrgAcc: PropTypes.shape({}),
};

export default MrgAccDetailStandbyVertical;
