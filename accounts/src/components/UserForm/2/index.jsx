import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

// check whether current vendor has JFSA or not
const vendorHasJFSA = (
  process.env.REACT_APP_VENDOR !== 'qryptos' &&
  !!process.env.REACT_APP_VENDOR_JFSA_ID
);

class UserForm2 extends React.Component {
  componentDidUpdate(prevProps) {
    if (!vendorHasJFSA) { return; }

    if (this.props.form.country !== prevProps.form.country) {
      const value = this.props.form.country === 'JP';
      this.props.onChange.underJFSA(value);
    }
  }
  render() {
    return (
      <View {...this.props} />
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
