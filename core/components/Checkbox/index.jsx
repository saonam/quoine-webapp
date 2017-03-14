import React from 'react';

import View from './View';

class CheckBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    const value = e.target.checked;
    this.props.onChange({ target: { value } });
  }
  render() {
    return (
      <View {...this.props} onChange={this.onChange} />
    );
  }
}

CheckBox.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default CheckBox;
