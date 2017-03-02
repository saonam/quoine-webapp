import React from 'react';

import Item from './Item';

import styles from './styles.css';

const Notifications = ({ user, state }) => (
  <div>
    {state.items.map((notification) => {
      // dismissed
      if (state.dismissed.indexOf(notification.id) !== -1) {
        return null;
      }
      // special: disable trading but approved
      if (
        notification.id === 'disable-trading' &&
        user.status === 'approved'
      ) {
        return null;
      }
      // others
      return (
        <div key={notification.id} className={styles.item}>
          <Item notification={notification} />
        </div>
      );
    })}
  </div>
);

Notifications.propTypes = {
  user: React.PropTypes.shape({
    status: React.PropTypes.string,
  }).isRequired,
  state: React.PropTypes.shape({
    dismissed: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default Notifications;
