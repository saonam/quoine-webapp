import PropTypes from 'prop-types';
import React from 'react';

import FormWrapper from '@quoine/components/FormWrapper';
import View from './View';

import resources from './resources';

const initialForm = { phone: '' };

class TFAEnableAuthyAddPhone extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit({ phone }) {
    return resources.submit(phone).then(response => {
      this.props.onSuccess(response);
    });
  }
  render() {
    return (
      <FormWrapper
        initialForm={initialForm}
        onSubmit={this.onSubmit}
        Element={View}
      />
    );
  }
}

TFAEnableAuthyAddPhone.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default TFAEnableAuthyAddPhone;
