import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

import resources from '../resources';

class TermListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      busy: true,
      documents: {
        eStatement: null,
        terms: [],
      },
    };
  }
  componentDidMount() {
    resources.load(this.props.newOnly).then(documents => {
      this.setState({
        busy: false,
        documents,
      });
    });
  }
  render() {
    return (
      <View {...this.state} {...this.props} />
    );
  }
}

TermListContainer.propTypes = {
  newOnly: PropTypes.bool,
};

export default TermListContainer;
