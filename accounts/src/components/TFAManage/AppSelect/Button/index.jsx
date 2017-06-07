import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class TFAManageAppSelectButton extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect() {
    this.props.onSelect(this.props.app);
  }
  render() {
    return (
      <View {...this.props} onSelect={this.onSelect} />
    );
  }
}

TFAManageAppSelectButton.propTypes = {
  app: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TFAManageAppSelectButton;
