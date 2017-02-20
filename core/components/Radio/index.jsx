import React from 'react';

import View from './View';

class Radio extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log(e);
    const value = e.target.checked;
    this.props.onChange({ target: { value } });
  }
  render() {
    return (
      <View {...this.props} onChange={this.onChange} />
    );
  }
}

Radio.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default Radio;
