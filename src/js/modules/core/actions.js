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

export const getCurrentEvents = () => {
  return dispatch => {
    dispatch({ type: t.FETCH_CURRENT_EVENTS_PENDING });
    axios
      .get(`${API_ENDPOINT}/current-events`)
      .then(response => {
        dispatch({
          type: t.FETCH_CURRENT_EVENTS_FULFILLED,
          payload: response.data,
        });
      })
      .catch(err => {
        dispatch({
          type: t.FETCH_CURRENT_EVENTS_FULFILLED,
          payload: [
            "https://www.nytimes.com/2018/01/04/opinion/gerrymandering-supreme-court.html",
            "http://www.nybooks.com/daily/2018/01/11/will-the-court-kill-the-gerrymander/",
            "https://www.citylab.com/equity/2018/01/how-gerrymandering-silenced-north-carolinas-cities/550406/",
            "https://www.theguardian.com/us-news/2018/jan/14/north-carolina-gerrymandering-ruling-supreme-court",
            "https://www.nytimes.com/interactive/2018/01/17/upshot/pennsylvania-gerrymandering.html",
            "https://www.vox.com/2018/1/22/16920636/pennsylvania-gerrymander-ruling-house",
            "http://www.newsobserver.com/news/politics-government/politics-columns-blogs/under-the-dome/article196508439.html",
            "https://www.theatlantic.com/science/archive/2018/01/efficiency-gap-gerrymandering/551492/",
          ],
        });
      });
  };
};
