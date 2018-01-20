const initialState = { grid: [], };

for (let i = 0; i < 50; i++) {
  const leftCells = [];
  for (let j = 0; j < 50; i++) {
    leftCells.push({
      id: i*50 + j,
      district: 0,
      population: 10,
    });
  }
  grid.push({
    cells: leftCells
  })
}

for (let i = 50; i < 100; i++) {
  const rightCells = [];
  for (let j = 0; j < 50; i++) {
    rightCells.push({
      id: i*50 + j + 50,
      district: 1,
      population: 10,
    });
  }
  grid.push({
    cells: rightCells
  })
}

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  }
  return state;
};

export default reducer;
