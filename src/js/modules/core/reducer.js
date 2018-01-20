const initialState = { grid: [], };

const NUM_COLS = 60;
const NUM_ROWS = 33;

for (let i = 0; i < NUM_ROWS / 2; i++) {
  const leftCells = [];
  for (let j = 0; j < NUM_COLS; j++) {
    leftCells.push({
      id: i*NUM_COLS + j,
      district: 0,
      population: 10,
    });
  }
  initialState.grid.push({
    cells: leftCells
  })
}

for (let i = 0; i < NUM_ROWS / 2; i++) {
  const rightCells = [];
  for (let j = 0; j < NUM_COLS; j++) {
    rightCells.push({
      id: i*NUM_COLS + j + NUM_COLS,
      district: 1,
      population: 10,
    });
  }
  initialState.grid.push({
    cells: rightCells
  })
}

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  }
  return state;
};

export default reducer;
