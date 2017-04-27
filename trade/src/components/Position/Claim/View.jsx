import PropTypes from 'prop-types';
import React from 'react';

import FloatBox from '@quoine/components/FloatBox';

import Button from './Button';
import Confirm from './Confirm';
import Err from './Err';

import styles from './styles.css';

const stop = (event) => {
  event.stopPropagation();
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
  activity: PropTypes.shape({}),
  position: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  error: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]).isRequired,
  layout: PropTypes.string.isRequired,
};

export default PositionClaimView;
