import React from 'react';

import Header from 'components/DashboardHeader';
import Main from 'components/DashboardMain';

import styles from './styles.css';

const DashboardBody = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <Header />
    </header>
    <main className={styles.main}>
      <Main />
    </main>
  </div>
);

export default DashboardBody;
