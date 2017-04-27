import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class FormNumberInPlace extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: this.props.defaultValue };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    this.setState({ value: event.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.value);
    this.props.onCancel();
  }
  render() {
    return (
      <View
        value={this.state.value} onChange={this.onChange}
        onSubmit={this.onSubmit} onCancel={this.props.onCancel}
      />
    );
  }
}

FormNumberInPlace.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default FormNumberInPlace;
