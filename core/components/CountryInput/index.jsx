import React from 'react';

import resources from './resources';

import View from './View';

class CountryInput extends React.PureComponent {
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
    return (
      <View {...this.props} countries={this.state.countries} />
    );
  }
}

export default CountryInput;
