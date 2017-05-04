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
    // ===
    this.onChange = Object.keys(this.state.form)
      .reduce((prev, key) => ({
        ...prev,
        [key]: this.onChange.bind(this, key),
      }), {});
    this.onValidate = this.onValidate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSuccessDismiss = this.onSuccessDismiss.bind(this);
    // ===
    this.onRef = this.onRef.bind(this);
    this.onCaptchaExpired = this.onCaptchaExpired.bind(this);
  }
  componentDidMount() {
    if (this.props.captcha) {
      window.grecaptcha.render(this.captchaWidget, {
        sitekey: '6Lcz4R0UAAAAAIZiEeheMNlocFx2zEUQetS2uzgX',
        callback: this.onSubmit,
        'expired-callback': this.onCaptchaExpired,
        size: 'invisible',
      });
    }
  }
  onRef(ref) {
    this.captchaWidget = ref;
    window.captchaWidget = ref;
  }
  onCaptchaExpired() {
    window.grecaptcha.reset(this.captchaWidget);
  }
  onValidate(event) {
    if (event && event.preventDefault) { event.preventDefault(); }
    if (this.props.captcha && !window.grecaptcha.getResponse()) {
      window.grecaptcha.execute();
    } else {
      this.onSubmit();
    }
  }
  onSubmit() {
    this.setState({ busy: true });

    const payload = this.state.form;
    if (this.props.captcha) {
      payload.captcha = window.grecaptcha.getResponse();
    }

    return this.props.onSubmit(payload)
      .then((response) => {
        this.setState({ busy: false, success: response });

        const { onSuccess } = this.props;
        if (onSuccess) { onSuccess(response); }
      })
      .catch((error) => {
        this.setState({ error, busy: false });
      });
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
  render() {
    const { busy, form, error, success } = this.state;
    // remove used props
    const {
      // eslint-disable-next-line no-unused-vars
      initialForm, onSuccess, onSubmit, Element, captcha, ...others
    } = this.props;
    return (
      <div>
        <div ref={this.onRef} />
        <Element
          error={error}
          form={form} onChange={this.onChange}
          busy={busy} onSubmit={this.onValidate}
          success={success} onSuccessDismiss={this.onSuccessDismiss}
          {...others}
        />
      </div>
    );
  }
}

FormWrapper.propTypes = {
  onSuccess: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  initialForm: PropTypes.shape({}).isRequired,
  Element: PropTypes.func.isRequired,
  captcha: PropTypes.bool,
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
