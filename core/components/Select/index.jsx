import React from 'react';

import View from './View';

class Select extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.props.onChange({ target: { value } });
  }
  render() {
    return (
      // onChange in this.props will be replaced
      <View {...this.props} onChange={this.onChange} />
    );
  }
}

Select.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default Select;
