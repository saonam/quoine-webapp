import React from 'react';

import translate from '@quoine/translate';

import Color from '@quoine/components/Color';
import Link from '@quoine/components/Link';

import styles from './styles.css';

const colorMap = {
  approved: 'positive',
  pending: 'negative',
  declined: 'negative',
  'documents-submitted': 'positive',
};

const ProfileVerification = ({ user }) => {
  const status = user.status.replace('_', '-');
  // TODO: translate reason here
  const reason = user.statusDeclinedReason;
  return (
    <div>

      <div>
        <Color styleName="primary-3">
          {translate('user:status')}
          <span>: </span>
        </Color>
        <Color styleName={colorMap[status]}>
          {translate(`user:status-${status}`)}
        </Color>
      </div>

      {(status === 'pending' && user.underJFSA) ? (
        <div>
          <p className={styles.help}>
            {translate('user:help-pending-jp')}
            <Link
              pathname="https://s3-ap-northeast-1.amazonaws.com/jfsa/document_details_20170316.pdf"
              target="_blank" styleName="accent text"
            >
              {translate('user:help-pending-jp-link')}
            </Link>
          </p>
        </div>
      ) : (
        <p className={styles.help}>
          {translate(`user:help-${status}`, { reason })}
        </p>
      )}
    </div>
  );
};

ProfileVerification.propTypes = {
  user: React.PropTypes.shape({}),
};

export default ProfileVerification;
