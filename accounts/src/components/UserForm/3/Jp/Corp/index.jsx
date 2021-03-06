import PropTypes from 'prop-types';
import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import View from './View';

class UserForm3JpCorp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(jpCorp) {
    const { form, onChange, onSetChanged } = this.props;
    if (form.jpCorp !== jpCorp) {
      onChange.jpCorp(jpCorp);
      if (onSetChanged) { onSetChanged(); }
    }
    return this.props.onSubmit();
  }
  render() {
    return (
      <FromWrapper
        initialForm={this.props.form.jpCorp}
        onSubmit={this.onSubmit}
        Element={View}
        // ===
        edit={this.props.edit}
      />
    );
  }
}

UserForm3JpCorp.propTypes = {
  form: PropTypes.shape({
    jpCorp: PropTypes.shape({}).isRequired,
  }).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  onSubmit: PropTypes.func.isRequired,
  // ===
  edit: PropTypes.bool,
  onSetChanged: PropTypes.func,
};

export default UserForm3JpCorp;
