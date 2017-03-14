import React from 'react';

import View from './View';

import resources from './resources';

class SignUpBody4JpReviewCountry extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { countries: [] };
  }
  componentDidMount() {
    resources.load().then(countries => {
      this.setState({ countries });
    });
  }
  render() {
    const country = this.state.countries.find(
      item => item.iso === this.props.iso
    );
    return (
      <View country={country} />
    );
  }
}

SignUpBody4JpReviewCountry.propTypes = {
  iso: React.PropTypes.string,
};

export default SignUpBody4JpReviewCountry;
