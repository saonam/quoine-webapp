import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class TabsButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect() {
    this.props.onSelect(this.props.panel.id);
  }
  render() {
    const { panel, current } = this.props;
    return (
      <View panel={panel} current={current} onSelect={this.onSelect} />
    );
  }
}

TabsButton.propTypes = {
  panel: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  current: PropTypes.shape({}).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TabsButton;
