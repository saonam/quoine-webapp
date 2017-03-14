import React from 'react';

import Wrapper from '@quoine/components/FormOnChangeWrapper';

import View from './View';

import initialForm from './initialForm';

class ShForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onChange(e) {
    const { value } = e.target;
    this.props.onChange(this.props.index, { target: { value } });
  }
  onRemove() {
    this.props.onRemove(this.props.index);
  }
  render() {
    return (
      <Wrapper
        View={View}
        initialForm={initialForm}
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

ShForm.propTypes = {
  index: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  value: React.PropTypes.shape({}).isRequired,
};

export default ShForm;
