import PropTypes from 'prop-types';
import React from 'react';

import resources from './resources';
import View from './View';

class INRTransferInput extends React.Component {
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

INRTransferInput.propTypes = {
  type: PropTypes.oneOf(['fund', 'withdrawal']).isRequired,
};

export default INRTransferInput;
