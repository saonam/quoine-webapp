import React from 'react';

import Panels from 'components/Panels';

import Charts from 'components/Charts';
import ChartsSpine from 'components/Charts/Spine';

import Blotters from 'components/Blotters';
import BlottersSpine from 'components/Blotters/Spine';

import Basic from 'components/Basic';
import BasicSpine from 'components/Basic/Spine';

import ProductBook from 'components/ProductBook';
import ProductBookSpine from 'components/ProductBook/Spine';

// import News from 'components/News';
// import NewsSpine from 'components/News/Spine';

import Transfer from 'components/Transfer';
import TransferSpine from 'components/Transfer/Spine';

import TransPanel from 'components/TransPanel';
import TransPanelSpine from 'components/TransPanel/Spine';

import BalancePanel from 'components/BalancePanel';
import BalancePanelSpine from 'components/BalancePanel/Spine';

import styles from './styles.css';

const DashboardMain = () => (
  <div className={styles.main}>
    <Panels
      Elements={[
        { Cover: Basic, Spine: BasicSpine },
        { Cover: ProductBook, Spine: ProductBookSpine },
        { Cover: Charts, Spine: ChartsSpine, transparent: true },
        { Cover: Blotters, Spine: BlottersSpine },
        // { Cover: News, Spine: NewsSpine },
        { Cover: Transfer, Spine: TransferSpine },
        { Cover: TransPanel, Spine: TransPanelSpine },
        { Cover: BalancePanel, Spine: BalancePanelSpine },
      ]}
    />
  </div>
);

export default DashboardMain;
