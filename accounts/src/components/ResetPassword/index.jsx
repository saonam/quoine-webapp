import PropTypes from 'prop-types';
import React from 'react';

import FormWrapper from '@quoine/components/FormWrapper';
import View from './View';

import resources from './resources';

const initialForm = {
  password: '',
  token: '',
};

class ResetPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(form) {
    return resources.resetPassword(form)
    .then(() => {
      this.props.router.push({
        pathname: '/sign-in',
        query: {
          continue: this.props.location.query.continue,
          message: 'password-updated',
        },
      });
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

ResetPasswordContainer.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    query: PropTypes.shape({
      continue: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ResetPasswordContainer;
