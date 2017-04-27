import PropTypes from 'prop-types';
import React from 'react';

class FormOnChangeWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = Object.keys(this.props.initialForm)
      .reduce((prev, key) => ({
        ...prev,
        [key]: this.onChange.bind(this, key),
      }), {});
  }
  onChange(key, value) {
    const form = {
      ...this.props.value,
      [key]: value,
    };
    this.props.onChange(form);
  }
  render() {
    const { View, ...others } = this.props;
    delete others.initialForm;
    return (
      <View {...others} onChange={this.onChange} />
    );
  }
}

FormOnChangeWrapper.propTypes = {
  View: PropTypes.func.isRequired,
  initialForm: PropTypes.shape({}).isRequired,
  value: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormOnChangeWrapper;
