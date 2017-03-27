const charts = (state) => {
  if (state.charts && state.charts.double !== undefined) {
    return state;
  }

  const nextCharts = {};
  const oldCharts = state.charts;
  if (typeof oldCharts === 'number') {
    nextCharts.double = oldCharts === 2;
  }

  return {
    ...state,
    nextCharts,
  };
};

export default charts;
