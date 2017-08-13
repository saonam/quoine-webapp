import PropTypes from 'prop-types';
import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';
import { jpTerm } from '@quoine/states/user/resources/initialForm';

import View from './View';

import resources from './resources';

class TermContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    return resources.update()
      .then(() => {
        this.props.onSuccess();
      });
  }
  render() {
    return (
      <FromWrapper
        initialForm={jpTerm}
        onSubmit={this.onSubmit}
        Element={View}
      />
    );
  }
}

TermContainer.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default TermContainer;
