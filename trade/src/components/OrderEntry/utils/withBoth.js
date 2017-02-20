import withOnChange from './withOnChange';
import withCondition from './withCondition';

const withBoth = (Component, propName) => {
  let Enhanced = Component;
  Enhanced = withCondition(Enhanced, propName);
  Enhanced = withOnChange(Enhanced, propName);
  return Enhanced;
};

export default withBoth;
