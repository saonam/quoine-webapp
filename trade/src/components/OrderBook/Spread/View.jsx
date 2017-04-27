import PropTypes from 'prop-types';
import React from 'react';

import ColorByValue from '@quoine/components/ColorByValue';
import ColorFlashing from '@quoine/components/ColorFlashing';
import Money from '@quoine/components/Money';
import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import background from './background.svg';
import styles from './styles.css';

let last = 0;

const OrderBookSpread = ({ busy, spread, currencies }) => {
  if (busy) {
    return <div className={styles.loading}><LoadingIconWrapper /></div>;
  }

  if (!spread || !currencies) {
    return <div className={styles.empty}>–</div>;
  }

  const change = spread - last; last = spread;
  return (
    <div className={styles.main}>
      <ColorByValue value={change}>
        <ColorFlashing value={spread} block>
          <Money value={spread} currency={currencies.quote} />
          <svg className={styles.background} width="36" height="36">
            <use xlinkHref={background} />
          </svg>
        </ColorFlashing>
      </ColorByValue>
    </div>
  );
};

OrderBookSpread.propTypes = {
  spread: PropTypes.number,
  currencies: PropTypes.shape({
    quote: PropTypes.string.isRequired,
  }),
  busy: PropTypes.bool.isRequired,
};

export default OrderBookSpread;
