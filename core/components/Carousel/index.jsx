import React from 'react';

import View from './View';

const isLarger = (a, b) => (a > b);
const isSmaller = (a, b) => (a < b);

class Carousel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onLeft = this.onMove.bind(this, -1);
    this.onRight = this.onMove.bind(this, +1);
    this.onRef = this.onRef.bind(this);
    // ===
    this.state = { overflow: false };
    // will be set later by ref
    this.node = null;
    this.moving = null;
    // ===
    this.onUpdate = this.onUpdate.bind(this);
  }
  componentDidMount() { this.onUpdate(); }
  componentDidUpdate() { this.onUpdate(); }
  onUpdate() {
    const node = this.node;
    const overflow = node ? node.scrollWidth > node.clientWidth : false;

    // we need to set state after did update since only then
    // we know node.clientWidth and node.scrollWidth properly
    if (overflow !== this.state.overflow) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ overflow });
    }
  }
  onMove(direction) {
    if (this.moving) {
      window.cancelAnimationFrame(this.moving);
    }

    const node = this.node;
    let target = node.scrollLeft + (200 * direction);

    // validate
    if (target < 0) { target = 0; }
    const scrollMax = node.scrollWidth - node.clientWidth;
    if (target > scrollMax) { target = scrollMax; }

    const compare = direction === 1 ? isSmaller : isLarger;

    // set
    const repeat = () => {
      // TODO: easing this
      node.scrollLeft += 10 * direction;
      if (compare(node.scrollLeft, target)) {
        this.moving = window.requestAnimationFrame(repeat);
      }
    };
    this.moving = window.requestAnimationFrame(repeat);
  }
  onRef(node) {
    this.node = node;
  }
  render() {
    const { onLeft, onRight, onRef } = this;
    const { overflow } = this.state;
    return (
      <View
        onLeft={onLeft} onRight={onRight} onRef={onRef} overflow={overflow}
        {...this.props}
      />
    );
  }
}

export default Carousel;
