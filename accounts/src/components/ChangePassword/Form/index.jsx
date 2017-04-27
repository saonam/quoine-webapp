import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';

import View from './View';

class ChangePasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      next: '',
      busy: false,
      error: '',
      success: false,
    };
    this.onCurrentChange = this.onChange.bind(this, 'current');
    this.onNextChange = this.onChange.bind(this, 'next');
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(key, value) {
    this.setState({
      [key]: value,
      error: '',
    });
  }
  onSubmit(event) {
    event.preventDefault();

    this.setState({ busy: true });

    const { current, next } = this.state;
    resources.submit({ current, next })
    .then(() => {
      this.setState({ success: true });
    })
    .catch((error) => {
      this.setState({ error: error.message });
    })
    .then(() => {
      this.setState({ busy: false });
    });
  }
  render() {
    return (
      <View
        {...this.state} onSubmit={this.onSubmit} onCancel={this.props.onClose}
        onCurrentChange={this.onCurrentChange} onNextChange={this.onNextChange}
      />
    );
  }
}

ChangePasswordForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ChangePasswordForm;
