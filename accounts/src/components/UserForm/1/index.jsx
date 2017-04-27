import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class UserForm1 extends React.Component {
  constructor(props) {
    super(props);
    this.onIndividual = this.onSelect.bind(this, 'individual');
    this.onCorporate = this.onSelect.bind(this, 'corporate');
  }
  onSelect(value) {
    this.props.onChange.type(value);
    this.props.onSubmit();
  }
  render() {
    return (
      <View onCorporate={this.onCorporate} onIndividual={this.onIndividual} />
    );
  }
}

UserForm1.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.shape({
    type: PropTypes.func.isRequired,
  }).isRequired,
};

export default UserForm1;
