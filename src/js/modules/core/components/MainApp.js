import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Grid, Row } from "react-bootstrap/lib/";

import Cell from "./Cell";
import { refreshWindowDimensions } from "../actions";

const styles = {
  row: {
    height: "20px",
  },
};

class MainApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      focusedCell: null,
    };
  }

  handleMouseDown = cell => {
    this.setState({ focusedCell: cell });
  };

  handleMouseUp = () => {
    this.setState({ focusedCell: null });
  };

  render() {
    const { classes, grid } = this.props;
    return (
      <Grid fluid>
        {grid.map((row, index) => {
          return (
            <div className={classes.row} key={index}>
              {row.cells.map((cell, cIndex) => (
                <Cell
                  focusedCell={this.state.focusedCell}
                  key={cIndex}
                  cell={cell}
                  onMouseDown={this.handleMouseDown}
                  onMouseUp={this.handleMouseUp}
                />
              ))}
            </div>
          );
        })}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  grid: state.core.grid,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ refreshWindowDimensions }, dispatch);
};

export default connect(mapStateToProps)(injectSheet(styles)(MainApp));
