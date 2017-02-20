import React from 'react';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import TransitionGroup from '@quoine/components/TransitionGroup';

import Item from 'components/Fund/Item';

import styles from './styles.css';

const FundFiatListBody = ({ busy, funds }) => {
  if (busy) { return <Loading />; }
  if (funds.length === 0) {
    return (
      <p className={styles.empty}>
        {translate('fund:pending-empty')}
      </p>
    );
  }
  return (
    <TransitionGroup>
      {funds.map(fund => (
        <div className={styles.fund} key={fund.id}>
          <Item fund={fund} />
        </div>
      ))}
    </TransitionGroup>
  );
};

FundFiatListBody.propTypes = {
  busy: React.PropTypes.bool.isRequired,
  funds: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default FundFiatListBody;
