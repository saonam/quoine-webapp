import PropTypes from 'prop-types';
import React from 'react';

class AuthorizeWrapper extends React.Component {
  componentWillMount() {
    // unauthorized
    if (window.quoine.auth.tokenId === 1) {
      this.props.router.push('/sign-in?message=need-sign-in');
    }
  }
  render() {
    const { Element, ...others } = this.props;
    return (
      <Element {...others} />
    );
  }
}

AuthorizeWrapper.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  Element: PropTypes.func.isRequired,
};

export default AuthorizeWrapper;
