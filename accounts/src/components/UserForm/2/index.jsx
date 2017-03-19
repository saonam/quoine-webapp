import React from 'react';

import View from './View';

let cacheCountry = '';

class UserForm2 extends React.Component {
  componentDidUpdate() {
    const { form, onChange } = this.props;
    if (
      process.env.REACT_APP_VENDOR === 'quoine' &&
      form.country !== cacheCountry
    ) {
      cacheCountry = form.country;
      onChange.isQuoineJapan({
        target: { value: form.country === 'JP' },
      });
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
    isQuoineJapan: React.PropTypes.bool.isRequired,
  }).isRequired,
  onChange: React.PropTypes.shape({
    isQuoineJapan: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default UserForm2;
