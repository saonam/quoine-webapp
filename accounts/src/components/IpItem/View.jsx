import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';
import Hint from '@quoine/components/Hint';

import Row from 'components/SettingsRow';
import Remove from 'components/Ip/Remove';
import ErrBox from 'components/Ip/ErrBox';

import styles from './styles.css';


const TokenItem = ({ ip }) => (
  <div>
    <Row label={translate('ip:ip')}>
      {ip.ip}
    </Row>

    <Row label={translate('ip:status')}>
      <span className={styles.status}>
        {translate(`ip:status-${ip.status}`)}
      </span>

      {(ip.status === 'awaiting-confirmation') && (
        <Hint style={{ width: 250, left: '50%', transform: 'translateX(-50%)' }} >
          <p>{translate('ip:checkmail-notification')}</p>
        </Hint>
      )}
    </Row>

    <Row>
      <Remove ip={ip} />
      <ErrBox ip={ip} />
    </Row>
  </div>
);

TokenItem.propTypes = {
  ip: PropTypes.shape({}).isRequired,
};

export default TokenItem;
