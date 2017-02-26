const charts = (state) => {
  if (state.charts && state.charts.double !== undefined) {
    return state;
  }

  const charts = {};
  const oldCharts = state.charts;
  if (typeof oldCharts === 'number') {
    charts.double = oldCharts === 2 ? true : false;
  }

  return {
    ...state,
    charts,
  };
};

export default charts;
