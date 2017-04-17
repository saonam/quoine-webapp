import React from 'react';

import translate from '@quoine/translate';

import Row from 'components/SettingsRow';
import { Permissions, Value, Remove } from 'components/Token';

import styles from './styles.css';

const TokenItem = ({ token }) => (
  <div>
    <Row label={translate('token:id')}>
      {token.id}
    </Row>
    <Row label={translate('token:permissions')}>
      <Permissions token={token} />
    </Row>
    { token.new ? (
      <Row label={translate('token:value')}>
        <Value token={token} />
      </Row>
    ) : null }
    <div className={styles.remove}>
      <Row>
        <Remove token={token} />
      </Row>
    </div>
  </div>
);

TokenItem.propTypes = {
  token: React.PropTypes.shape({}).isRequired,
};

export default TokenItem;
