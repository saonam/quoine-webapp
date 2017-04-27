import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class ConfirmWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { skip: false };
    this.onToggleSkip = this.onToggleSkip.bind(this);
    this.onYes = this.onSet.bind(this, true);
    this.onNo = this.onSet.bind(this, false);
  }
  onToggleSkip() {
    this.setState({ skip: !this.state.skip });
  }
  onSet(confirmed) {
    this.props.onSet({
      skipChecked: this.state.skip, confirmed,
    });
  }
  render() {
    return (
      <View
        onToggleSkip={this.onToggleSkip} skip={this.state.skip}
        onYes={this.onYes} onNo={this.onNo}
        {...this.props}
      />
    );
  }
}

ConfirmWrapper.propTypes = {
  onSet: PropTypes.func.isRequired,
};

export default ConfirmWrapper;
