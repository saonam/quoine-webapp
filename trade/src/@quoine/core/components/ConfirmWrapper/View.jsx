import React from 'react';

import Checkbox from './Checkbox';
import Button from './Button';
import styles from './styles.css';

const ConfirmWrapperView = ({ children, layout, ...props }) => {
  const checkbox = <Checkbox {...props} />;
  const yes = <Button side="yes" layout={layout} {...props} />;
  const no = <Button side="no" layout={layout} {...props} />;

  if (layout === 'hero') {
    return (
      <div>
        <div>{children}</div>
        <div className={styles.topSmall}>{checkbox}</div>
        <div className={styles.topMedium}>{yes}</div>
        <div className={styles.topSmall}>{no}</div>
      </div>
    );
  }

  // inline and box
  const buttonClassName = `${
    layout === 'box' ? styles.auto : ''
  } ${styles.leftSmall}`;
  return (
    <div className={layout === 'inline' ? styles.flex : ''}>
      {layout === 'inline' ? (
        <div className={styles.leftCheckbox}>
          {checkbox}
        </div>
      ) : null}
      <div
        className={`${styles.flex} ${
          layout === 'box' ? styles.wrap : ''
        }`}
      >
        <div>{children}</div>
        <div className={`${styles.flex} ${styles.auto}`}>
          <div className={buttonClassName}>{yes}</div>
          <div className={buttonClassName}>{no}</div>
        </div>
      </div>
      {layout === 'box' ? checkbox : null}
    </div>
  );
};

ConfirmWrapperView.propTypes = {
  children: React.PropTypes.node,
  layout: React.PropTypes.oneOf(['inline', 'hero', 'box']).isRequired,
};

export default ConfirmWrapperView;
