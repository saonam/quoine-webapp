import PropTypes from 'prop-types';
import React from 'react';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import translate from '@quoine/translate';
import styles from './styles.css';

const IpRemoveConfirm = ({ onSet }) => (
  <ConfirmWrapper
    onSet={onSet}
    yesLabel={translate('ip:remove-action-yes')}
    yesStyleName="negative-bg full text"
    id="ip-remove"
    layout="box"
  >
    <p className={styles.text}>
      {translate('ip:remove-description')}
    </p>
  </ConfirmWrapper>
);

IpRemoveConfirm.propTypes = {
  onSet: PropTypes.func.isRequired,
};

export default IpRemoveConfirm;
