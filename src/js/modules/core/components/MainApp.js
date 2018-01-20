import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import Cell from "./";
import { refreshWindowDimensions } from "../actions";

const styles = {

};

const MainApp = ({ classes, grid }) => {
  return (
    <div>
      {grid.map(row => {
        return row.cells.map(cell => {
          <Cell cell={cell} />;
        })
      })}
    </div>
  )
};

const mapStateToProps = state => ({
  grid: state.core.grid,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ refreshWindowDimensions }, dispatch);
};

export default connect(mapStateToProps)(injectSheet(styles)(MainApp));
