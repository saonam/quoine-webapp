import React from 'react';

import View from './Body1View';

class Body1 extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectIndividual = this.onSelectType.bind(this, 'individual');
    this.onSelectCorporate = this.onSelectType.bind(this, 'corporate');
  }
  onSelectType(value) {
    // fake event
    const event = { target: { value } };
    this.props.onChange.type(event);
    this.props.onNext();
  }
  render() {
    return (
      <View
        onSelectCorporate={this.onSelectCorporate}
        onSelectIndividual={this.onSelectIndividual}
      />
    );
  }
}

Body1.propTypes = {
  onChange: React.PropTypes.shape({
    type: React.PropTypes.func.isRequired,
  }).isRequired,
  onNext: React.PropTypes.func.isRequired,
};

export default Body1;
