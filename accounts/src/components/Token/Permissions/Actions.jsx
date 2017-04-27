import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Color from '@quoine/components/Color';

const TokenPermissionsActions = ({ permission }) => (
  <Color styleName="primary-3">
    ({permission.actions.map((action, index) => (
      <span key={action}>
        {index === 1 ? (
          <span>&nbsp;&&nbsp;</span>
        ) : null}
        {translate(`token:action-${action}`)}
      </span>
    ))})
  </Color>
);

TokenPermissionsActions.propTypes = {
  permission: PropTypes.shape({}).isRequired,
};

export default TokenPermissionsActions;
