import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router-dom";

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
  const handleOnClick = state => {
    history.push(`/state/${state.code}`);
  }
  return (
    <div className={classes.UnitedStates}>
      <Helmet>
        <title>The Gerry App</title>
      </Helmet>
      <div className={classes.grid}>
        {grid.map((row, index) => {
          return (
            <div className={classes.row} key={index}>
              {row.map((state, sIndex) => (
                <State
                  key={sIndex}
                  state={state}
                  onClick={handleOnClick}
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

export default withRouter(connect(mapStateToProps)(injectSheet(styles)(UnitedStates)));
