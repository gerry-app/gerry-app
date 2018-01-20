import { STATE_CODE_TO_NAME } from "./constants";

const initialState = { grid: [], unitedStatesGrid: [] };

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

const stateCodes = ["WA", "DE", "WI", "WV", "FL", "WY", "NH", "NJ", "NM", "TX", "LA", "NC", "ND", "NE", "TN", "NY", "PA", "CA", "NV", "VA", "CO", "AL", "AR", "VT", "IL", "GA", "IN", "IA", "MA", "AZ", "ID", "CT", "ME", "MD", "OK", "OH", "UT", "MO", "MN", "MI", "RI", "KS", "MT", "MS", "SC", "KY", "OR", "SD"];

for (let r = 0; r < NUM_ROWS; r++) {
  const row = [];
  for (let c = 0; c < 48; c++) {
    row.push({
      code: stateCodes[c],
    });
  }
  initialState.unitedStatesGrid.push(row);
}

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  }
  return state;
};

export default reducer;
