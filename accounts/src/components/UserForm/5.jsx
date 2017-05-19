import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Link from '@quoine/components/Link';

import styles from './styles.css';

const UserForm5 = ({ userId }) => (
  <div>
    <div className={styles.body}>
      <p className={styles.success}>
        {translate('sign-up:message-success')}
      </p>

      {process.env.REACT_APP_VENDOR === 'traders' ? (
        <div>
          <img
            alt=""
            src={`https://admin.mtrf.net/ac/action.php?cid=AD000001&uid=${userId}&pid=1`}
            className={styles.hidden}
          />
        </div>
      ) : null}
    </div>

    <div className={styles.input}>
      <Link pathname="/sign-in" styleName="modal accent">
        {translate('sign-up:action-sign-in')}
      </Link>
    </div>
  </div>
);

UserForm5.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default UserForm5;
