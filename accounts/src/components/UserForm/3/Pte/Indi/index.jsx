import PropTypes from 'prop-types';
import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import View from './View';

class UserForm3PteIndi extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    this.props.onChange.pteIndi(form);
    return this.props.onSubmit();
  }
  render() {
    return (
      <FromWrapper
        initialForm={this.props.form.pteIndi}
        onSubmit={this.onSubmit}
        Element={View}
      />
    );
  }
}

UserForm3PteIndi.propTypes = {
  form: PropTypes.shape({
    pteIndi: PropTypes.shape({}).isRequired,
  }).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm3PteIndi;
