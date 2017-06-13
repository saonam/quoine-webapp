import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class UserForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.form.country === nextProps.form.country) {
      return;
    }
    if (process.env.REACT_APP_VENDOR === 'qryptos') {
      const disabled = nextProps.form.country === 'JP' || nextProps.form.country === 'US' ? ({
        message: 'sign-up-error:country-restricted',
      }) : false;
      this.setState({ disabled });
    } else {
      this.props.onChange.underJFSA(nextProps.form.country === 'JP');
    }
  }
  render() {
    return (
      <View {...this.props} {...this.state} />
    );
  }
}

UserForm2.propTypes = {
  form: PropTypes.shape({
    country: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.shape({
    underJFSA: PropTypes.func.isRequired,
  }).isRequired,
};

export default UserForm2;
