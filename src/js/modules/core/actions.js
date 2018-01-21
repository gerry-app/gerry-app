import * as t from "./actionTypes";
import axios from "axios";
import { API_ENDPOINT } from "../../constants";

export const getStateGrid = stateCode => {
  return dispatch => {
    dispatch({ type: t.FETCH_STATE_DATA_PENDING });
    axios
      .get(`${API_ENDPOINT}/state/${stateCode}`)
      .then(response => {
        dispatch({
          type: t.FETCH_STATE_DATA_FULFILLED,
          payload: response.data,
        });
      })
      .catch(err => {
        dispatch({
          type: t.FETCH_STATE_DATA_REJECTED,
          payload: err,
        });
      });
  };
};
