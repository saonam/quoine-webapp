import PropTypes from 'prop-types';
import React from 'react';

import { sh as initialForm } from '@quoine/states/user/resources/initialForm';

import View from './View';

class ShsInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onAdd() {
    const value = [...this.props.value, initialForm];
    this.props.onChange(value);
  }
  onRemove(indexToRemove) {
    const value = [];
    this.props.value.forEach((item, index) => {
      if (index !== indexToRemove) {
        value.push(item);
      }
    });
    this.props.onChange(value);
  }
  onChange(indexToChange, itemToChange) {
    const value = this.props.value.map((item, index) => (
      index === indexToChange ? itemToChange : item
    ));
    this.props.onChange(value);
  }
  render() {
    return (
      <View
        {...this.props}
        value={this.props.value}
        onAdd={this.onAdd}
        onRemove={this.onRemove}
        onChange={this.onChange}
      />
    );
  }
}

ShsInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ShsInput;
