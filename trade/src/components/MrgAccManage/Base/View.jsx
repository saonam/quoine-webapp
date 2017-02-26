import React from 'react';

import t from '@quoine/translate';

import Button from '@quoine/components/Button';
import ProductSummary from 'components/ProductSummary';
import MrgAccSummary from 'components/MrgAccSummary';

import styles from './styles.css';

const shouldShow = (mrgAcc, type) => {
  if (type === 'hidden') { return true; }
  if (mrgAcc.account !== mrgAcc.quoteCurrency) { return true; }
  return false;
};

const MrgAccManageBase = ({ mrgAcc, onToggle, onClick, type }) => (
  <div className={styles.main}>
    <button className={styles.summary} onClick={onClick}>
      <div className={styles.product}>
        <ProductSummary symbol={mrgAcc.product} />
      </div>
      <div className={styles.mrgAcc}>
        <MrgAccSummary name={mrgAcc.name} />
      </div>
    </button>
    {shouldShow(mrgAcc, type) ? (
      <Button styleName="accent text inline" onClick={onToggle}>
        {type === 'visible' ? (
          t('mrg-acc-manage:action-hide')
        ) : (
          t('mrg-acc-manage:action-show')
        )}
      </Button>
    ) : null}
  </div>
);

MrgAccManageBase.propTypes = {
  mrgAcc: React.PropTypes.shape({
    account: React.PropTypes.string.isRequired,
    product: React.PropTypes.string.isRequired,
    quoteCurrency: React.PropTypes.string.isRequired,
  }).isRequired,
  onToggle: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['visible', 'hidden']).isRequired,
};

export default MrgAccManageBase;
