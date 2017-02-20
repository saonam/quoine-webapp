import React from 'react';
import resources from './resources';

import View from './View';

class VolumesReport extends React.Component {
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

VolumesReport.propTypes = {
  frm: React.PropTypes.number.isRequired,
  to: React.PropTypes.number.isRequired,
};

export default VolumesReport;
