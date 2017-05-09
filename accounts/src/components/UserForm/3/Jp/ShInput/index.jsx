import PropTypes from 'prop-types';
import React from 'react';

import Wrapper from '@quoine/components/FormOnChangeWrapper';

import View from './View';

class ShsInputItem extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onChange(value) {
    this.props.onChange(this.props.index, value);
  }
  onRemove() {
    this.props.onRemove(this.props.index);
  }
  render() {
    return (
      <Wrapper
        {...this.props}
        // ===
        View={View}
        // ===
        value={this.props.value}
        onChange={this.onChange}
        // ===
        index={this.props.index}
        onRemove={this.onRemove}
      />
    );
  }
}

ShsInputItem.propTypes = {
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  value: PropTypes.shape({}).isRequired,
};

export default ShsInputItem;
