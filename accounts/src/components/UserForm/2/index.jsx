import React from 'react';

import View from './View';

class UserForm2 extends React.Component {
  componentDidUpdate(prevProps) {
    if (process.env.REACT_APP_VENDOR !== 'quoine') { return; }

    if (this.props.form.country !== prevProps.form.country) {
      const value = this.props.form.country === 'JP';
      this.props.onChange.isQuoineJapan(value);
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
    isQuoineJapan: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default UserForm2;
