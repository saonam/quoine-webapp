import PropTypes from 'prop-types';
import React from 'react';

import Term from '@quoine/components/Term';
import Header from 'components/DashboardHeader';
import Main from 'components/DashboardMain';

import styles from './styles.css';

const DashboardBody = ({ user }) => (
  user.needConfirmNewTerm ? (
    <Term />
  ) : (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Main />
      </main>
    </div>
  )
);

DashboardBody.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default DashboardBody;
