import React from 'react';

import resources from './resources';

import View from './View';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: { id: null, address: null, bank: null },
      busy: false,
      error: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = {
      id: this.onChangeBase.bind(this, 'id'),
      address: this.onChangeBase.bind(this, 'address'),
      bank: this.onChangeBase.bind(this, 'bank'),
    };
  }
  onSubmit() {
    this.setState({ busy: true });
    resources.submit(this.state.form)
    .then(this.props.onChangeStatus)
    .catch((e) => {
      let message = e.message;
      if (message.indexOf('allowed types')) {
        message = 'user-error:invalid-types';
      }
      this.setState({ busy: false, error: message });
    });
  }
  onChangeBase(prop, e) {
    this.setState({
      form: {
        ...this.state.form,
        [prop]: e.target.value,
      },
      error: '',
    });
  }
  render() {
    const { form, busy, error } = this.state;
    const disabled = busy || !form.id || !form.address || !form.bank;
    return (
      <View
        form={form} busy={busy} disabled={disabled} error={error}
        onSubmit={this.onSubmit} onChange={this.onChange}
      />
    );
  }
}

ProfileForm.propTypes = {
  onChangeStatus: React.PropTypes.func.isRequired,
};

export default ProfileForm;
