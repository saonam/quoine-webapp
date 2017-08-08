import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Row from 'components/SettingsRow';
import { Permissions, Value, Remove } from 'components/Token';


const TokenItem = ({ token }) => (
  <div>
    <Row label={translate('token:id')}>
      {token.id}
    </Row>
    <Row label={translate('token:permissions')}>
      <Permissions token={token} />
    </Row>

    {token.new ? (
      <Row label={translate('token:value')}>
        <Value token={token} />
      </Row>
    ) : null}
    <Row>
      <Remove token={token} />
    </Row>
  </div>
);

TokenItem.propTypes = {
  token: PropTypes.shape({}).isRequired,
};

export default TokenItem;
