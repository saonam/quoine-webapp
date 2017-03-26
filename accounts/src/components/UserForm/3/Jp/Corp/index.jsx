import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import View from './View';

class UserForm3JpCorp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    this.props.onChange.jpCorp(form);
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
  form: React.PropTypes.shape({
    jpCorp: React.PropTypes.shape({}).isRequired,
  }).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  // ===
  edit: React.PropTypes.bool,
};

export default UserForm3JpCorp;
