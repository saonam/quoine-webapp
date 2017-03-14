import React from 'react';

import initialForm from '../ShForm/initialForm';

import View from './View';

class ShsForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onAdd() {
    const value = [...this.props.value, initialForm];
    this.props.onChange({ target: { value } });
  }
  onRemove(indexToRemove) {
    const value = [];
    this.props.value.forEach((item, index) => {
      if (index !== indexToRemove) {
        value.push(item);
      }
    });
    this.props.onChange({ target: { value } });
  }
  onChange(indexToChange, e) {
    const itemToChange = e.target.value;
    const value = this.props.value.map((item, index) => (
      index === indexToChange ? itemToChange : item
    ));
    this.props.onChange({ target: { value } });
  }
  render() {
    return (
      <View
        value={this.props.value}
        onAdd={this.onAdd}
        onRemove={this.onRemove}
        onChange={this.onChange}
      />
    );
  }
}

ShsForm.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  value: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default ShsForm;
