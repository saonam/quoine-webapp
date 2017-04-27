import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class TokenAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        accounts: { r: false },
        executions: { r: false },
        orders: { r: false, w: false },
        trades: { r: false, w: false },
        'trading-accounts': { r: false, w: false },
      },
    };
    this.onChange = Object.keys(this.state.form)
      .reduce((byName, name) => ({
        ...byName,
        [name]: Object.keys(this.state.form[name])
          .reduce((byAction, action) => ({
            ...byAction,
            [action]: this.onChangeBase.bind(this, name, action),
          }), {}),
      }), {});
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeBase(name, action) {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [name]: {
          ...form[name],
          [action]: !form[name][action],
        },
      },
    });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.form);
    this.props.onCancel();
  }
  render() {
    return (
      <View
        form={this.state.form} onChange={this.onChange}
        onSubmit={this.onSubmit} onCancel={this.props.onCancel}
      />
    );
  }
}

TokenAddForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default TokenAddForm;
