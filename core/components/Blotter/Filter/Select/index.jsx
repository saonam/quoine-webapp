import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class BlotterFilterSelect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    this.props.onSet({ [this.props.name]: value });
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    const { onSet, ...others } = this.props;
    return (
      <View onChange={this.onChange} {...others} />
    );
  }
}

BlotterFilterSelect.propTypes = {
  onSet: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default BlotterFilterSelect;
