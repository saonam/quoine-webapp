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
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
  Element: React.PropTypes.func.isRequired,
};

export default AuthorizeWrapper;
