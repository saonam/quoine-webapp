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
  panel: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
  }).isRequired,
  current: React.PropTypes.shape({}).isRequired,
  onSelect: React.PropTypes.func.isRequired,
};

export default TabsButton;
