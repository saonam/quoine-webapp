import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';

import View from './View';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: null,
        address: null,
        bank: null,
        corporation: null,
      },
      busy: false,
      error: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = {
      id: this.onChangeBase.bind(this, 'id'),
      address: this.onChangeBase.bind(this, 'address'),
      bank: this.onChangeBase.bind(this, 'bank'),
      corporation: this.onChangeBase.bind(this, 'corporation'),
    };
  }

  onSubmit() {
    this.setState({ busy: true });

    resources.submit(this.state.form)
    .then(res => {
      this.setState({ busy: false });
      this.props.onChangeStatus(res);
    })
    .catch(e => {
      let message = e.message;
      if (message.indexOf('allowed types')) {
        message = 'user-error:invalid-types';
      }
      this.setState({ busy: false, error: message });
    });
  }
  onChangeBase(key, value) {
    this.setState({
      form: {
        ...this.state.form,
        [key]: value,
      },
      error: '',
    });
  }

  render() {
    const user = this.props.user;
    const { form, busy, error } = this.state;
    let disabled = busy || !form.id || !form.address || !form.bank;

    // in japan users dont need to upload all of them
    if (user.underJFSA) {
      disabled = busy || (!form.id && !form.address && !form.bank && !form.corporation);
    }

    // for corp users
    if (user.type === 'corporate') {
      let count = 0;
      if (form.id) count += 1;
      if (form.address) count += 1;
      if (form.bank) count += 1;
      if (form.corporation) count += 1;

      disabled = busy || (count < 3);
    }

    return (
      <View
        form={form} busy={busy} disabled={disabled} error={error}
        onSubmit={this.onSubmit} onChange={this.onChange}
        user={this.props.user}
      />
    );
  }
}

ProfileForm.propTypes = {
  onChangeStatus: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

export default ProfileForm;
