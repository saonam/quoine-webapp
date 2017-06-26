import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';


const MaintenanceInfo = (props) => (
  <section className={styles.main}>
    <div className={styles.wrapper}>
      <p>
        只今システムメンテナンス中です。
        メンテナンスが完了次第、ニュースレターでお知らします。
      </p>

      <p>
        系统正在维护中，敬请稍候。
      </p>

      <p>
        系統正在維護中，敬請稍候。
      </p>

      <p>
        We are currently down for maintenance.
        We will notify you by email when it is completed.
      </p>
    </div>
  </section>
);

export default MaintenanceInfo;
