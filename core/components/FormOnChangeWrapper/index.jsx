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
  onChange(key, event) {
    const value = {
      ...this.props.value,
      [key]: event.target.value,
    };
    const fakeEvent = { target: { value } };
    this.props.onChange(fakeEvent);
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
  View: React.PropTypes.func.isRequired,
  initialForm: React.PropTypes.shape({}).isRequired,
  value: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default FormOnChangeWrapper;