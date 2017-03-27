import React from 'react';

import styles from './styles.css';

const AccountManageList = ({
  modelKeys, title, description, Element,
}) => (
  modelKeys.length !== 0 ? (
    <div>
      <h1 className={styles.heading}>{title}</h1>
      {description ? (
        <p className={styles.description}>{description}</p>
      ) : null}
      {modelKeys.map(modelKey => (
        <div key={modelKey} className={styles.item}>
          <Element modelKey={modelKey} />
        </div>
      ))}
    </div>
  ) : null
);

AccountManageList.propTypes = {
  modelKeys: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  Element: React.PropTypes.func.isRequired,
};

export default AccountManageList;
