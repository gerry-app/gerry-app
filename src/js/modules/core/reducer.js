import { STATE_CODE_TO_NAME } from "./constants";
import { USA } from "./data/usa";

import {
  FETCH_STATE_DATA_PENDING,
  FETCH_STATE_DATA_REJECTED,
  FETCH_STATE_DATA_FULFILLED,
} from "./actionTypes";

const initialState = { 
  isFetching: false,
  error: null,
  stateGrid: null,
  unitedStatesGrid: null,
};

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
    case FETCH_STATE_DATA_PENDING: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case FETCH_STATE_DATA_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        stateGrid: action.payload,
      };
    }
    case FETCH_STATE_DATA_REJECTED: {
      return { ...state, isFetching: false, error: action.payload }
    }
  }
  return state;
};

export default reducer;
