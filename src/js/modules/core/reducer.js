import { STATE_CODE_TO_NAME } from "./constants";
import { USA } from "./data/usa";
import { STATES } from "./data/states";

const initialState = { stateGrid: [], unitedStatesGrid: [] };

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

const reducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  }
  return state;
};

export default reducer;
