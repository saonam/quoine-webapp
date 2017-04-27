import PropTypes from 'prop-types';
import React from 'react';
import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Expander from '@quoine/components/Expander';

import Detail from 'components/BankDetail';

import Overview from './Overview';

import styles from './styles.css';

const FundInfoView = ({ busy, banks }) => {
  if (busy) { return <Loading />; }
  if (!banks || banks.length === 0) {
    return (
      <div className={styles.warning}>
        {translate('fund-bank:not-support')}
      </div>
    );
  }
  // banks ok
  return (
    <div className={styles.banks}>
      {banks.map(bank => (
        <div key={bank.id} className={styles.bank}>
          <Expander
            Overview={Overview}
            Detail={Detail}
            bank={bank}
          />
        </div>
      ))}
    </div>
  );
};

FundInfoView.propTypes = {
  busy: PropTypes.bool.isRequired,
  banks: PropTypes.arrayOf(
    PropTypes.shape({})
  ).isRequired,
};

export default FundInfoView;
