import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import State from "./State";
import Dashboard from "./Dashboard";
import { CELL_SIZE, GET_DISTRICT_COLOR, STATE_CODE_TO_NAME } from "../../../constants";
import { refreshWindowDimensions } from "../actions";

const styles = {
  grid: {
    width: "600px",
    margin: "0 auto",
  },
  row: {
    height: CELL_SIZE,
  },
};

const UnitedStates = ({ classes, grid, history }) => {
  return (
    <div className={classes.Gerrymander}>
      <Helmet>
        <title>The Gerry App</title>
      </Helmet>
      <div className={classes.grid}>
        {grid.map((row, index) => {
          return (
            <div className={classes.row} key={index}>
              {row.map((cell, cIndex) => (
                <State
                  key={cIndex}
                  cell={cell}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  grid: state.core.unitedStatesGrid,
});

export default withRouter(connect(mapStateToProps)(injectSheet(styles)(Gerrymander)));
