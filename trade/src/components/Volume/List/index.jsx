import PropTypes from 'prop-types';
import React from 'react';
import resources from './resources';

import View from './View';

class VolumeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { busy: true, volumes: [] };
    this.onLoad = this.onLoad.bind(this);
  }
  componentDidMount() {
    this.onLoad();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.frm !== this.props.frm ||
      prevProps.to !== this.props.to
    ) {
      this.onLoad();
    }
  }
  onLoad() {
    this.setState({ busy: true });
    resources.load(this.props.frm, this.props.to)
    .then(volumes => this.setState({ busy: false, volumes }));
  }
  render() {
    return (
      <View {...this.state} />
    );
  }
}

VolumeList.propTypes = {
  frm: PropTypes.number.isRequired,
  to: PropTypes.number.isRequired,
};

export default VolumeList;
