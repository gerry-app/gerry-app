import React from "react";
import injectSheet from "react-jss";
import { CELL_SIZE, GET_DISTRICT_COLOR } from "../../../constants";

const styles = {
  State: {
    display: "inline-block",
    height: CELL_SIZE,
    width: CELL_SIZE,
    userSelect: "none",
  },
};

const State = ({ classes, state }) => {
  return (
    <div
      className={classes.State}
      onMouseDown={() => onMouseDown(cell)}
      onMouseUp={onMouseUp}
      onMouseEnter={() => onMouseEnter(cell)}
      style={{
        backgroundColor: cell ? GET_DISTRICT_COLOR(cell.district) : "#fff",
      }}
    />
  );
};

export default injectSheet(styles)(State);
