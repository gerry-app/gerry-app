const initialState = { grid: [], };

for (let i = 0; i < 10; i++) {
  const leftCells = [];
  for (let j = 0; j < 20; j++) {
    leftCells.push({
      id: i*20 + j,
      district: 0,
      population: 10,
    });
  }
  initialState.grid.push({
    cells: leftCells
  })
}

for (let i = 0; i < 10; i++) {
  const rightCells = [];
  for (let j = 0; j < 20; j++) {
    rightCells.push({
      id: i*20 + j + 20,
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
