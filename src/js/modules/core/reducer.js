import { STATE_CODE_TO_NAME } from "./constants";
import { USA } from "./data/usa";

const initialState = { grid: [], unitedStatesGrid: [] };

initialState.unitedStatesGrid = USA.map(row => {
  return row.map(x => {
    if (x === 0) {
      return null;
    }
    return {
      code: x,
    };
  });
});

const NUM_COLS = 30;
const NUM_ROWS = 30;

for (let r = 0; r < NUM_ROWS; r++) {
  const row = [];
  for (let c = 0; c < NUM_COLS; c++) {
    row.push({
      district: `NY-${Math.floor(r / 7)}`,
      democrats: 30 + Math.ceil(Math.random() * 30),
      republicans: 30 + Math.ceil(Math.random() * 30),
      independents: Math.ceil(Math.random() * 10),
      row: r,
      col: c,
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
