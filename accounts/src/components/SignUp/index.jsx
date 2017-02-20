import React from 'react';

import View from './View';

import initialForm from './initialForm';
import onNextAt from './onNextAt';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: initialForm,
      step: 1,
      busy: false,
      error: '',
    };
    this.onChange = Object.keys(this.state.form).reduce(
      (handlers, key) => Object.assign(handlers, {
        [key]: this.onChangeBase.bind(this, key),
      })
    , {});
    this.onBack = this.onBack.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  onChangeBase(name, event) {
    const form = Object.assign({}, this.state.form, {
      [name]: event.target.value,
    });
    this.setState({ form });
  }
  onBack() {
    if (this.state.step > 1) {
      this.setState({ step: this.state.step - 1, error: '' });
    }
  }
  onReset() {
    this.setState({
      form: initialForm, step: 1, error: '',
    });
  }
  onNext(e) {
    // this might be attached to form so need e
    if (e) {
      e.preventDefault();
    }

    this.setState({ busy: true, error: '' });

    onNextAt[`${this.state.step}`](this.state.form)
    .then(() => {
      if (this.state.step < 5) {
        this.setState({ step: this.state.step + 1 });
      }
    })
    .catch((error) => {
      this.setState({ error: error.message });
    })
    .then(() => {
      this.setState({ busy: false });
    });
  }
  render() {
    const { form, step, error, done, busy } = this.state;
    const { onBack, onNext, onChange, onReset } = this;
    return (
      <View
        {...{
          form, step, error, done, busy, onBack, onNext, onChange, onReset,
        }}
      />
    );
  }
}

export default SignUp;
