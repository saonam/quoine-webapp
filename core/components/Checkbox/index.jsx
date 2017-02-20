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
    // get onChange to filter it from 'props';
    // eslint-disable-next-line no-unused-vars
    const { onChange, ...others } = this.props;
    return (
      <View onChange={this.onChange} {...others} />
    );
  }
}

CheckBox.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default CheckBox;
