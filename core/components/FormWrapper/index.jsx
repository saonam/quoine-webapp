import React from 'react';

class FormWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: false,
      error: false,
      success: false,
      form: this.props.initialForm,
    };
    this.onChange = Object.keys(this.state.form)
      .reduce((prev, key) => ({
        ...prev,
        [key]: this.onChange.bind(this, key),
      }), {});
    this.onSubmit = this.onSubmit.bind(this);
    this.onSuccessDismiss = this.onSuccessDismiss.bind(this);
  }
  onSuccessDismiss() {
    this.setState({ success: false });
  }
  onChange(key, e) {
    this.setState({
      form: {
        ...this.state.form,
        [key]: e.target.value,
      },
      error: false,
    });
  }
  onSubmit(event) {
    if (event) { event.preventDefault(); }

    this.setState({ busy: true });
    return this.props.onSubmit(this.state.form)
    .then((response) => {
      this.setState({ busy: false, success: response });

      const { onSuccess } = this.props;
      if (onSuccess) { onSuccess(response); }
    })
    .catch((error) => {
      this.setState({ error, busy: false });
    });
  }
  render() {
    const { busy, form, error, success } = this.state;
    // remove used props
    const {
      // eslint-disable-next-line no-unused-vars
      initialForm, onSuccess, onSubmit, Element, ...others
    } = this.props;
    return (
      <Element
        error={error}
        form={form} onChange={this.onChange}
        busy={busy} onSubmit={this.onSubmit}
        success={success} onSuccessDismiss={this.onSuccessDismiss}
        {...others}
      />
    );
  }
}

FormWrapper.propTypes = {
  onSuccess: React.PropTypes.func,
  onSubmit: React.PropTypes.func.isRequired,
  initialForm: React.PropTypes.shape({}).isRequired,
  Element: React.PropTypes.func.isRequired,
};

const FormWrapperPropTypes = {
  error: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
    React.PropTypes.shape({}),
  ]).isRequired,
  busy: React.PropTypes.bool.isRequired,
  success: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.string,
    React.PropTypes.shape({}),
  ]),
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  form: React.PropTypes.shape({}).isRequired,
};

export { FormWrapperPropTypes };

export default FormWrapper;
