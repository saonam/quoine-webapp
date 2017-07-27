import PropTypes from 'prop-types';
import React from 'react';

import View from './View';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.checkItems = this.checkItems.bind(this);
  }
  componentDidMount() {
    this.checkItems(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.checkItems(nextProps);
  }
  checkItems(props) {
    const { user, dismissed } = props;
    if (!user.id) { return; }

    const all = [];
    
    if (user.underJFSA && user.status === 'approved') {
      all.push({
        id: 'disable-trading',
        styleName: 'negative',
      });
    }

    if (!user.tfa) {
      all.push({
        id: 'need-enable-tfa',
        styleName: 'negative',
      });
    }

    if (user.tfaType === 'authy') {
      all.push({
        id: 'need-change-tfa-type-to-ga',
        styleName: 'negative',
      });
    }

    const displayable = [];
    all.forEach(item => {
      if (dismissed.indexOf(item.id) === -1) {
        displayable.push(item);
      }
    });

    if (displayable.length) {
      this.setState({ items: displayable });
    }
  }
  render() {
    return (
      <View items={this.state.items} />
    );
  }
}

Notifications.propTypes = {
  user: PropTypes.shape({}).isRequired,
  dismissed: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Notifications;
