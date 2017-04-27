import PropTypes from 'prop-types';
import React from 'react';

import t from '@quoine/translate';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const MrgAccManageButton = ({ onOpen }) => (
  <Button
    styleName="text inline primary-3" onClick={onOpen}
    className={styles.main}
  >
    {t('mrg-acc-manage:action-manage')}
  </Button>
);

MrgAccManageButton.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default MrgAccManageButton;
