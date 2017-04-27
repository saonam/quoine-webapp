import PropTypes from 'prop-types';
import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';

import View from './View';

class UserForm3PteCorp extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    this.props.onChange.pteCorp(form);
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
  form: PropTypes.shape({
    pteCorp: PropTypes.shape({}).isRequired,
  }).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default UserForm3PteCorp;
