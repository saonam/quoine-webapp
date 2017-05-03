import PropTypes from 'prop-types';
import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import View from './View';

class UserForm3JpIndi extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    // only update form when have changes
    if (form !== this.props.form.jpIndi) {
      this.props.onChange.jpIndi(form);
    }
    return this.props.onSubmit();
  }
  render() {
    return (
      <FromWrapper
        initialForm={this.props.form.jpIndi}
        onSubmit={this.onSubmit}
        Element={View}
        // ===
        edit={this.props.edit}
      />
    );
  }
}

UserForm3JpIndi.propTypes = {
  form: PropTypes.shape({
    jpIndi: PropTypes.shape({}).isRequired,
  }).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  onSubmit: PropTypes.func.isRequired,
  // ===
  edit: PropTypes.bool,
};

export default UserForm3JpIndi;
