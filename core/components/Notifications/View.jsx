import React from 'react';

import Item from './Item';

import styles from './styles.css';

const isJapanUser = (user) => (
  user.vendorId === process.env.REACT_APP_QUOINEJP_ID
);

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
            notification.id === 'disable-trading' && !isJapanUser(user)
          ) || (
            notification.id === 'disable-trading' && isJapanUser(user) && user.status === 'approved'
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
  user: React.PropTypes.shape({
    status: React.PropTypes.string,
  }).isRequired,
  state: React.PropTypes.shape({
    dismissed: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    items: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
  }).isRequired,
};

export default Notifications;
