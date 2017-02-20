import React from 'react';
import resources from './resources';

import View from './View';

class VolumesList extends React.Component {
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

VolumesList.propTypes = {
  frm: React.PropTypes.number.isRequired,
  to: React.PropTypes.number.isRequired,
};

export default VolumesList;
