import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import Cell from "./Cell";
import Dashboard from "./Dashboard";
import { CELL_SIZE, GET_DISTRICT_COLOR } from "../../../constants";
import { refreshWindowDimensions } from "../actions";

const styles = {
  Gerrymander: {
    display: "flex",
    justifyContent: "space-around",
  },
  grid: {
    width: "600px",
    margin: "0 auto",
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
        if (cell.district in districts) {
          districts[cell.district].democrats += cell.democrats;
          districts[cell.district].republicans += cell.republicans;
          districts[cell.district].independents += cell.independents;
        } else {
          districts[cell.district] = {
            democrats: cell.democrats,
            republicans: cell.republicans,
            independents: cell.independents,
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
    if (focusedCell && focusedCell.district !== cell.district) {
      districts[focusedCell.district].democrats += cell.democrats;
      districts[focusedCell.district].republicans += cell.republicans;
      districts[focusedCell.district].independents += cell.independents;
      districts[cell.district].democrats -= cell.democrats;
      districts[cell.district].republicans -= cell.republicans;
      districts[cell.district].independents -= cell.independents;
      grid[cell.row][cell.col].district = focusedCell.district;
      this.setState({ rerender: !this.state.rerender }); // forces child update
    }
  };

  render() {
    const { classes } = this.props;
    const { grid, districts } = this.state;
    return (
      <div className={classes.Gerrymander}>
        <Helmet>
          <title>The Stuyvesant Spectator</title>
        </Helmet>
        <div className={classes.grid}>          
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

const mapStateToProps = state => ({
  grid: state.core.grid,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ refreshWindowDimensions }, dispatch);
};

export default connect(mapStateToProps)(injectSheet(styles)(Gerrymander));
