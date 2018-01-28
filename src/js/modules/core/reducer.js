import { STATE_CODE_TO_NAME } from "./constants";
import { USA } from "./data/usa";

import {
  FETCH_STATE_DATA_PENDING,
  FETCH_STATE_DATA_REJECTED,
  FETCH_STATE_DATA_FULFILLED,
  FETCH_CURRENT_EVENTS_PENDING,
  FETCH_CURRENT_EVENTS_REJECTED,
  FETCH_CURRENT_EVENTS_FULFILLED,
} from "./actionTypes";

const initialState = {
  isFetching: false,
  error: null,
  stateGrid: null,
  unitedStatesGrid: null,
  currentEvents: null,
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
    case FETCH_STATE_DATA_PENDING: case FETCH_CURRENT_EVENTS_PENDING: {
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
    case FETCH_STATE_DATA_REJECTED: case FETCH_CURRENT_EVENTS_REJECTED: {
      return { ...state, isFetching: false, error: action.payload };
    }

    case FETCH_CURRENT_EVENTS_FULFILLED: {
      return {
        ...state,
        isFetching: false,
        currentEvents: action.payload,
      };
    }
  }
  return state;
};

export default reducer;
