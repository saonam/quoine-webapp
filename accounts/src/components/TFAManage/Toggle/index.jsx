import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';

import View from './View';

class TFAManageToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', busy: false, error: '' };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();

    this.setState({ busy: true });
    resources[this.props.enabled ? 'disable' : 'enable'](this.state.value)
    .then(() => {
      this.props.onToggle();
      this.props.goStandby();
    }).catch(error => {
      this.setState({ busy: false, error: error.message });
    });
  }
  onChange(value) {
    this.setState({ value, error: '' });
  }
  render() {
    const { value, busy, error } = this.state;
    const { goStandby, enabled } = this.props;
    return (
      <View
        value={value} onChange={this.onChange} busy={busy} error={error}
        onSubmit={this.onSubmit} onCancel={goStandby} enabled={enabled}
      />
    );
  }
}

TFAManageToggle.propTypes = {
  goStandby: View.propTypes.onCancel,
  onToggle: PropTypes.func.isRequired,
  enabled: View.propTypes.enabled,
};

export default TFAManageToggle;
