import PropTypes from 'prop-types';
import React from 'react';
import resources from './resources';

import View from './View';

class VolumeReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busy: false, success: false };
    this.onSubmit = this.onSubmit.bind(this);
    this.onSuccessDismiss = this.onSuccessDismiss.bind(this);
  }
  onSubmit() {
    this.setState({ busy: true, success: false });
    resources.report(this.props.frm, this.props.to)
    .then(() => this.setState({ busy: false, success: true }));
  }
  onSuccessDismiss() {
    this.setState({ success: false });
  }
  render() {
    return (
      <View
        {...this.state}
        onSubmit={this.onSubmit}
        onSuccessDismiss={this.onSuccessDismiss}
      />
    );
  }
}

VolumeReport.propTypes = {
  frm: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
};

export default VolumeReport;
