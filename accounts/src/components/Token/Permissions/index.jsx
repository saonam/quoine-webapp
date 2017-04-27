import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Actions from './Actions';

import styles from './styles.css';

const TokenPermissions = ({ token }) => {
  const { permissions } = token;
  const { length } = permissions;
  if (!length) {
    return <span>{translate('token:none')}</span>;
  }
  return (
    <div className={styles.main}>
      {permissions.map((permission, index) => (
        <span key={permission.name}>
          {translate(`token:name-${permission.name}`)}
          <span>&nbsp;</span>
          <Actions permission={permission} />
          {index !== length - 1 ? (
            <span>, </span>
          ) : null}
        </span>
      ))}
    </div>
  );
};

TokenPermissions.propTypes = {
  token: PropTypes.shape({}).isRequired,
};

export default TokenPermissions;
