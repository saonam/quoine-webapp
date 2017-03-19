import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import View from './View';

class UserForm3PteCorp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    const e = { target: { value: form } };
    this.props.onChange.pteCorp(e);
    return this.props.onSubmit();
  }
  render() {
    return (
      <FromWrapper
        initialForm={this.props.form.pteCorp}
        onSubmit={this.onSubmit}
        Element={View}
      />
    );
  }
}

UserForm3PteCorp.propTypes = {
  form: React.PropTypes.shape({
    pteCorp: React.PropTypes.shape({}).isRequired,
  }).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default UserForm3PteCorp;
