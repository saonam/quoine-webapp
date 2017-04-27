import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const SettingsBody = ({ children }) => (
  <div className={styles.main}>
    {React.Children.map(children, (child) => (
      // child might be null => avoid render empty section
      child ? (
        <section className={styles.section}>
          {child}
        </section>
      ) : null
    ))}
  </div>
);

SettingsBody.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SettingsBody;
