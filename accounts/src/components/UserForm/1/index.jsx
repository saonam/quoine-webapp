import React from 'react';

import View from './View';

class UserForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.onIndividual = this.onSelect.bind(this, 'individual');
    this.onCorporate = this.onSelect.bind(this, 'corporate');
  }
  onSelect(value) {
    // fake event
    const event = { target: { value } };
    this.props.onChange.type(event);
    this.props.onSubmit();
  }
  render() {
    return (
      <View onCorporate={this.onCorporate} onIndividual={this.onIndividual} />
    );
  }
}

UserForm1.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.shape({
    type: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default UserForm1;