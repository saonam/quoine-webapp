import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';
import Icon from '@quoine/components/Icon';

import styles from './styles.css';

const NotificationItem = ({ notification, onDismiss }) => (
  <div className={styles[notification.styleName || 'accent']}>
    {translate(`notifications:${notification.id}`)}
    <div className={styles.button}>
      <Button
        styleName="text inverse"
        onClick={onDismiss}
      >
        <Icon glyph="cancel" />
        {translate('notifications:dismiss')}
        &nbsp;
        &nbsp;
      </Button>
    </div>
  </div>
);

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.string.isRequired,
    styleName: PropTypes.string.isRequired,
  }).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default NotificationItem;
