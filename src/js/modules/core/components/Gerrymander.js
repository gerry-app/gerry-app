import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import Cell from "./Cell";
import Dashboard from "./Dashboard";
import { CELL_SIZE, GET_DISTRICT_COLOR, STATE_CODE_TO_NAME } from "../../../constants";
import { getStateGrid } from "../selectors";

const styles = {
  Gerrymander: {
    display: "flex",
    justifyContent: "space-around",
  },
  grid: {
    width: "920px",
    margin: "0 auto",
    marginTop: "150px",
  },
  sexy: {
    fontFamily: "Atlas Grotesk",
    fontWeight: 300,
    fontSize: "11px",
    textTransform: "uppercase",
  },
  row: {
    height: CELL_SIZE,
  },
};

class Gerrymander extends React.PureComponent {
  constructor(props) {
    super(props);
    let districts = {};
    this.props.grid.forEach(row => {
      row.forEach(cell => {
        if (cell.dis in districts) {
          districts[cell.dis].democrats += cell.D;
          districts[cell.dis].republicans += cell.R;
          districts[cell.dis].independents += cell.I;
        } else {
          districts[cell.district] = {
            democrats: cell.D,
            republicans: cell.R,
            independents: cell.I,
          };
        }
      });
    });
    this.state = {
      focusedCell: null,
      districts,
      rerender: true,
      grid: this.props.grid,
    };
  }

  handleMouseDown = cell => {
    this.setState({ focusedCell: cell });
  };

  handleMouseUp = () => {
    this.setState({ focusedCell: null });
  };

  handleMouseEnter = cell => {
    const { focusedCell, districts, grid } = this.state;
    if (focusedCell && focusedCell.dis !== cell.dis) {
      districts[focusedCell.dis].democrats += cell.D;
      districts[focusedCell.dis].republicans += cell.R;
      districts[focusedCell.dis].independents += cell.I;
      districts[cell.dis].democrats -= cell.D;
      districts[cell.dis].republicans -= cell.R;
      districts[cell.dis].independents -= cell.I;
      grid[cell.row][cell.col].dis = focusedCell.dis;
      this.setState({ rerender: !this.state.rerender }); // forces child update
    }
  };

  render() {
    const { classes, match } = this.props;
    const { grid, districts } = this.state;
    return (      
      <div className={classes.Gerrymander}>
        <div className={classes.grid}>
          <p className={classes.sexy}>{STATE_CODE_TO_NAME[match.params.state_code]}</p>
          {grid.map((row, index) => {
            return (
              <div className={classes.row} key={index}>
                {row.map((cell, cIndex) => (
                  <Cell
                    key={cIndex}
                    cell={cell}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseDown={this.handleMouseDown}
                    onMouseUp={this.handleMouseUp}
                  />
                ))}
              </div>
            );
          })}
        </div>
        <Dashboard districts={districts} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  grid: getStateGrid(state, ownProps),
});

export default connect(mapStateToProps)(injectSheet(styles)(Gerrymander));
