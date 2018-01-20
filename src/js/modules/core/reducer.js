const initialState = { grid: [], };

const NUM_COLS = 60;
const NUM_ROWS = 33;

for (let r = 0; r < NUM_ROWS; r++) {
  const row = [];
  for (let c = 0; c < NUM_COLS; c++) {
    row.push({
      id: r * NUM_COLS + c,
      district: r % 5,
      population: 10,
      row: r,
      col: c
    });
  }
  initialState.grid.push(row);
}

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  }
  return state;
};

export default reducer;
