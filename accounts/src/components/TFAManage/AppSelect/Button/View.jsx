import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const TFAManageAppSelectButtonView = ({ current, app, onSelect }) => (
  <Button
    className={styles[`${current === app ? 'active' : 'normal'}`]}
    styleName="text accent inline"
    onClick={onSelect}
  >
    {translate(`tfa-manage:app-${app}`)}
  </Button>
);

TFAManageAppSelectButtonView.propTypes = {
  current: PropTypes.string,
  app: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TFAManageAppSelectButtonView;
