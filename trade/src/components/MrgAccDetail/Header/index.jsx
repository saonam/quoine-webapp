import React from 'react';

import Header from '@quoine/components/Header';

import translate from '@quoine/translate';

import styles from './styles.css';

const MrgAccDetailHeader = ({ activity }) => {
  const { confirming, reporting } = activity;
  if (confirming || reporting) {
    return (
      <Header styleName={`text center ${confirming ? 'negative' : 'accent'}`}>
        {translate(`mrg-acc-close:${confirming ? 'confirm' : 'report'}-title`)}
      </Header>
    );
  }

  return (
    <Header styleName="text center primary-1 hor-medium">
      <div className={styles.main}>
        <h1>{translate('mrg-acc:title-shorts')}</h1>
        <h1>{translate('mrg-acc:title-longs')}</h1>
      </div>
    </Header>
  );
};

MrgAccDetailHeader.propTypes = {
  activity: React.PropTypes.shape({}).isRequired,
};

export default MrgAccDetailHeader;
