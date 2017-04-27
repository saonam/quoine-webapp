import PropTypes from 'prop-types';
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
  onChange(key, value) {
    this.setState({
      form: {
        ...this.state.form,
        [key]: value,
      },
      error: false,
    });
  }
  onSubmit(event) {
    if (event && event.preventDefault) { event.preventDefault(); }

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
  onSuccess: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  initialForm: PropTypes.shape({}).isRequired,
  Element: PropTypes.func.isRequired,
};

const FormWrapperPropTypes = {
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({}),
  ]).isRequired,
  busy: PropTypes.bool.isRequired,
  success: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.shape({}),
  ]),
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
  onSubmit: PropTypes.func.isRequired,
  form: PropTypes.shape({}).isRequired,
};

export { FormWrapperPropTypes };

export default FormWrapper;
