import React from 'react';

import View from './View';

class FormNumberInPlace extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: this.props.defaultValue };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
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
  defaultValue: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
};

export default FormNumberInPlace;
