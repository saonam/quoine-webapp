import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class FileInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    const value = event.target.files[0];
    this.props.onChange(value);
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    const { onChange, ...others } = this.props;
    return (
      <View onChange={this.onChange} {...others} />
    );
  }
}

FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FileInput;
