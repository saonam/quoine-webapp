import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class ReportWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { skip: false };
    this.onToggleSkip = this.onToggleSkip.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  onToggleSkip() {
    this.setState({ skip: !this.state.skip });
  }
  onDismiss() {
    this.props.onSet({ skipChecked: this.state.skip });
  }
  render() {
    return (
      <View
        onToggleSkip={this.onToggleSkip} skip={this.state.skip}
        onDismiss={this.onDismiss} {...this.props}
      />
    );
  }
}

ReportWrapper.propTypes = {
  onSet: PropTypes.func.isRequired,
};

export default ReportWrapper;
