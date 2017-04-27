import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class CheckboxInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.checked);
  }
  render() {
    return (
      <View {...this.props} onChange={this.onChange} />
    );
  }
}

CheckboxInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CheckboxInput;
