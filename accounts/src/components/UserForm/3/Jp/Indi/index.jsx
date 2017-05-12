import PropTypes from 'prop-types';
import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import View from './View';

class UserForm3JpIndi extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(jpIndi) {
    const { form, onChange, onSetChanged } = this.props;
    if (form.jpIndi !== jpIndi) {
      onChange.jpIndi(jpIndi);
      if (onSetChanged) { onSetChanged(); }
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
  onSetChanged: PropTypes.func,
};

export default UserForm3JpIndi;
