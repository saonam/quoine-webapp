import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class TextAreaInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(event.target.value);
  }
  render() {
    return (
      // onChange in this.props will be replaced
      <View {...this.props} onChange={this.onChange} />
    );
  }
}

TextAreaInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default TextAreaInput;
