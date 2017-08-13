import PropTypes from 'prop-types';
import React from 'react';

import AccountManage from '@quoine/components/AccountManage';
import AccountSelect from 'components/AccountSelect';
import MarketSelect from 'components/MarketSelect';
import LayoutSelect from 'components/LayoutSelect';

import styles from './styles.css';

const DashboardMenu = ({ user }) => (
  user.needConfirmNewTerm ? null : (
    <div className={styles.main}>
      <div className={styles.accounts}>
        <div>
          <AccountSelect />
        </div>
        <div className={styles.manage}>
          <AccountManage />
        </div>
      </div>
      <div>
        <MarketSelect />
      </div>
      {process.env.REACT_APP_VENDOR === 'quoine' ? (
        <div>
          <LayoutSelect />
        </div>
      ) : null}
    </div>
  )
);

DashboardMenu.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default DashboardMenu;
