import React from 'react';

import FloatBox from '@quoine/components/FloatBox';

import Button from './Button';
import Confirm from './Confirm';
import Err from './Err';

import styles from './styles.css';

const stop = (e) => {
  e.stopPropagation();
};

const PositionClaimView = ({ activity, error, position, layout }) => {
  const confirming = !!(activity && activity.id === position.id);
  const message = (
    error.id === position.id && error.target === 'claim'
  ) ? error.message : false;
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.main} onClick={stop}>
      {confirming && layout === 'horizontal' ? (
        <div className={styles.box}>
          <FloatBox color="negative"><Confirm /></FloatBox>
        </div>
      ) : null}
      {message && layout === 'horizontal' ? (
        <div className={styles.box}>
          <FloatBox color="negative">
            <Err message={message} />
          </FloatBox>
        </div>
      ) : null}
      <Button confirming={confirming} position={position} />
    </div>
  );
};

PositionClaimView.propTypes = {
  activity: React.PropTypes.shape({}),
  position: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
  error: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]).isRequired,
  layout: React.PropTypes.string.isRequired,
};

export default PositionClaimView;
