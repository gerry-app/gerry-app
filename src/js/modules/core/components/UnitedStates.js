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
    width: "920px",
    margin: "0 auto",
    marginTop: "90px",
  },
  row: {
    height: CELL_SIZE,
  },
  currentState: {
    transform: "uppercase",
    fontFamily: "Atlas Grotesk",
    fontSize: "16px",
    textAlign: "center",
  },
};

class UnitedStates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredState: "",
    };
  }

  handleOnClick = state => {
    this.props.history.push(`/state/${state.code}`);
  }

  handleOnMouseEnter = state => {
    if (STATE_CODE_TO_NAME[state.code] !== this.state.hoveredState) {
      this.setState({ hoveredState: STATE_CODE_TO_NAME[state.code], });
    }
  }

  handleOnMouseLeave = () => {
    // this.setState({ hoveredState: "", });
  }

  render() {
    const { classes, grid, history } = this.props;
    return (
      <div className={classes.UnitedStates}>
        <Helmet>
          <title>The Gerry App</title>
        </Helmet>
        <p className={classes.currentState}>&mdash; {this.state.hoveredState} &mdash;</p>
        <div className={classes.grid}>
          {grid.map((row, index) => {
            return (
              <div className={classes.row} key={index}>
                {row.map((state, sIndex) => (
                  <State
                    key={sIndex}
                    state={state}
                    onMouseEnter={this.handleOnMouseEnter}
                    onMouseLeave={this.handleOnMouseLeave}
                    onClick={this.handleOnClick}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  grid: state.core.unitedStatesGrid,
});

export default withRouter(connect(mapStateToProps)(injectSheet(styles)(UnitedStates)));
