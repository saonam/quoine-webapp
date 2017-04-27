import PropTypes from 'prop-types';
import React from 'react';

import Link from '@quoine/components/Link';

import styles from './styles.css';

const NavigationLink = ({ pathname, children, presentational, ...props }) => (
  !pathname ? (
    <div
      className={styles[presentational ? 'mainRaw' : 'mainLink']}
      {...props}
    >
      {children}
    </div>
  ) : (
    <Link
      className={styles.mainLink} pathname={pathname}
      activeClassName={styles.active} onlyActiveOnIndex
      {...props}
    >
      {children}
    </Link>
  )
);

NavigationLink.propTypes = {
  pathname: PropTypes.string,
  children: PropTypes.node.isRequired,
  presentational: PropTypes.bool,
};

export default NavigationLink;
