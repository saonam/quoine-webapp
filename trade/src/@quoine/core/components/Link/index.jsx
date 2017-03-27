import React from 'react';
import { Link as RouterLink, withRouter } from 'react-router';

import styles from './styles.css';

const getStyle = styleName => (
  `${styles.default} ${
    styleName.split(' ').map(style => styles[style]).join(' ')
  }`
);

const Link = ({
  children, styleName, className: rawClassName, pathname: rawPathname,
  target,
  // explicit declare to filter from sending to child via others
  // eslint-disable-next-line react/prop-types, no-unused-vars
  router, params, location, routes,
  ...others
}) => {
  const pathname = rawPathname.replace(window.location.origin, '');
  const className = `${getStyle(styleName)} ${rawClassName}`;

  // external link
  if (
    pathname.lastIndexOf('http', 0) === 0 ||
    pathname.indexOf('.html') !== -1
  ) {
    return (
      <a
        className={className}
        href={pathname}
        target={target}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // internal link
  // by default, Link reverse query
  const to = { pathname, query: { continue: location.query.continue } };
  return (
    <RouterLink className={className} to={to} {...others}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  styleName: React.PropTypes.string,
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  pathname: React.PropTypes.string.isRequired,
  target: React.PropTypes.string,
};

Link.defaultProps = {
  styleName: '',
  className: '',
  target: '_self',
};

export default withRouter(Link);
