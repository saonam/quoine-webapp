import PropTypes from 'prop-types';
import React from 'react';

import Item from './Item';

import styles from './styles.css';

const Notifications = ({ user, state }) => {
  // don't show notifications if not signed in
  if (!user.id) { return null; }

  return (
    <div>
      {state.items.map((notification) => {
        // dismissed
        if (state.dismissed.indexOf(notification.id) !== -1) {
          return null;
        }

        // special: don't show disable-trading notification when
        if (
          (
            notification.id === 'disable-trading' && !user.underJFSA
          ) || (
            notification.id === 'disable-trading' && user.underJFSA && user.status === 'approved'
          )
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
};

Notifications.propTypes = {
  user: PropTypes.shape({
    status: PropTypes.string,
  }).isRequired,
  state: PropTypes.shape({
    dismissed: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default Notifications;
