import PropTypes from 'prop-types';
import React from 'react';

import Item from './Item';

import styles from './styles.css';

const NotificationsView = ({ items }) => {
  if (!items.length) { return null; }

  return (
    <div>
      {items.map(notification => (
        <div key={notification.id} className={styles.item}>
          <Item notification={notification} />
        </div>
      ))}
    </div>
  );
};

NotificationsView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default NotificationsView;
