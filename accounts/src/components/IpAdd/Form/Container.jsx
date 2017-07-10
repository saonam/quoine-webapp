import PropTypes from 'prop-types';
import React from 'react';

import resources from 'states/ips/resources';

import FormWrapper from '@quoine/components/FormWrapper';
import View from './View';

const initialForm = {
  ip: '',
  code: '',
};

class IpAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    return resources.add(form).then(ip => {
      this.props.onAdd(ip);
      this.props.onCancel();
    });
  }
  render() {
    return (
      <FormWrapper
        initialForm={initialForm}
        onSubmit={this.onSubmit}
        Element={View}
        onCancel={this.props.onCancel}
      />
    );
  }
}

IpAddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default IpAddForm;
