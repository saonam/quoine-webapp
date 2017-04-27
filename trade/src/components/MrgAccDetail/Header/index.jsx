import PropTypes from 'prop-types';
import React from 'react';

import Header from '@quoine/components/Header';

import translate from '@quoine/translate';

import styles from './styles.css';

const MrgAccDetailHeader = ({ status }) => {
  if (status !== 'standby') {
    return (
      <Header styleName={`text center ${status === 'confirm' ? 'negative' : 'accent'}`}>
        {translate(`mrg-acc-close:${status}-title`)}
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
  status: PropTypes.oneOf(['standby', 'confirm', 'report']).isRequired,
};

export default MrgAccDetailHeader;
