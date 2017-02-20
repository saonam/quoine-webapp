import React from 'react';

import styles from './styles.css';

const SettingsBody = ({ children }) => (
  <div className={styles.main}>
    {React.Children.map(children, (child) => (
      <section className={styles.section}>
        {child}
      </section>
    ))}
  </div>
);

SettingsBody.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default SettingsBody;
