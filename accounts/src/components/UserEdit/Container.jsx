import PropTypes from 'prop-types';
import React from 'react';

import FromWrapper from '@quoine/components/FormWrapper';
import View from './View';

import resources from './resources';

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { step: 1 };
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
  }
  onSetStep(step) {
    this.setState({ step });
  }
  onNext(form) {
    if (this.state.step === 2) {
      return resources.submit(form)
      .then(response => {
        this.props.onUpdate(response);
        return response;
      });
    }

    this.setState({ step: this.state.step + 1 });
    return Promise.resolve();
  }
  onBack() {
    this.setState({ step: this.state.step - 1 });
  }
  render() {
    return (
      <FromWrapper
        initialForm={this.props.user}
        onSubmit={this.onNext}
        Element={View}
        // ===
        step={this.state.step}
        onBack={this.onBack}
        onClose={this.props.onClose}
      />
    );
  }
}

UserEdit.propTypes = {
  user: PropTypes.shape({}).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UserEdit;
