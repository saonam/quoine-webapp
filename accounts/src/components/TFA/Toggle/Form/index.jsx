import PropTypes from 'prop-types';
import React from 'react';

import FormWrapper from '@quoine/components/FormWrapper';
import View from './View';

import resources from './resources';

const initialForm = { code: '' };

class TFAToggleForm extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit({ code }) {
    const { app, action, onToggleTfa } = this.props;
    return resources[action]({ app, code }).then(onToggleTfa);
  }
  render() {
    return (
      <FormWrapper
        initialForm={initialForm}
        onSubmit={this.onSubmit}
        Element={View}
        // ===
        {...this.props}
      />
    );
  }
}

TFAToggleForm.propTypes = {
  app: PropTypes.oneOf(['authy', 'ga']).isRequired,
  action: PropTypes.oneOf(['enable', 'disable']).isRequired,
  onToggleTfa: PropTypes.func.isRequired,
};

export default TFAToggleForm;
