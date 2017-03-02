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
  notification: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    styleName: React.PropTypes.string.isRequired,
  }).isRequired,
  onDismiss: React.PropTypes.func.isRequired,
};

export default NotificationItem;
