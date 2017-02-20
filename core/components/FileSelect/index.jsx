import React from 'react';

import View from './View';

class FileSelect extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.props.onChange({
      target: { value: e.target.files[0] },
    });
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    const { onChange, ...others } = this.props;
    return (
      <View onChange={this.onChange} {...others} />
    );
  }
}

FileSelect.propTypes = {
  onChange: React.PropTypes.func.isRequired,
};

export default FileSelect;
