import React from 'react';

import resources from './resources';
import View from './View';

class INRTransferSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { values: [] };
  }
  componentDidMount() {
    resources.load(this.props.type)
    .then(values => {
      this.setState({ values });
    });
  }
  render() {
    return <View {...this.props} values={this.state.values} />;
  }
}

INRTransferSelect.propTypes = {
  type: React.PropTypes.oneOf(['fund', 'withdrawal']).isRequired,
};

export default INRTransferSelect;
