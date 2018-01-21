import React from "react";
import injectSheet from "react-jss";
import { CELL_SIZE, GET_DISTRICT_COLOR, STATE_CODE_TO_COLOR_INDEX } from "../../../constants";

const stateColors = [
  "#D8334A",
  "#48CFAD",
  "#4FC1E9",
  "#FFCE54",
];

const styles = {
  State: {
    display: "inline-block",
    height: CELL_SIZE,
    width: CELL_SIZE,
    userSelect: "none",
  },
};

const State = ({ classes, state, onClick }) => {
  return (
    <div
      className={classes.State}
      onClick={() => onClick(state)}
      style={{
        backgroundColor: state ? stateColors[STATE_CODE_TO_COLOR_INDEX[state.code]] : "#fff",
      }}
    />
  );
};

export default injectSheet(styles)(State);
