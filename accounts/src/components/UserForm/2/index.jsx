import React from 'react';

import View from './View';

// check whether current vendor has JFSA or not
const vendorHasJFSA = !!process.env.REACT_APP_VENDOR_JFSA_ID;

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
  form: React.PropTypes.shape({
    country: React.PropTypes.string.isRequired,
  }).isRequired,
  onChange: React.PropTypes.shape({
    underJFSA: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default UserForm2;
