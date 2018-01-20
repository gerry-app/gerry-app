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
    let districts = {};
    this.props.grid.forEach(row => {
      row.cells.forEach(cell => {
        const districtNum = `${cell.district}`;
        if (districtNum in districts) {
          districts[districtNum] += cell.population;
        } else {
          districts[districtNum] = cell.population;
        }
      });      
    });
    this.state = {
      focusedCell: null,
      districts,
    };
  }

  handleMouseDown = cell => {
    this.setState({ focusedCell: cell });
  };

  handleMouseUp = () => {
    this.setState({ focusedCell: null });
  };

  handleMouseEnter = cell => {
    const { focusedCell, districts } = this.state;
    const { grid } = this.props;
    if (focusedCell && focusedCell.district !== cell.district) {
      districts[`${ocusedCell.district}`] += cell.population;
      districts[`${cell.district}`] -= cell.population;
      grid[cell.row][cell.col].district = focusedCell.district;
    }
  }

  render() {
    const { classes, grid } = this.props;
    return (
      <Grid fluid>
        <table>
          <thead>
            <tr>
              <th>District Number</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(this.state.districts).map(districtNum => {
            return (
              <tr key={districtNum}>
                <td>{districtNum}</td>
                <td>{this.state.districts[districtNum]}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
        {grid.map((row, index) => {
          return (
            <div className={classes.row} key={index}>
              {row.map((cell, cIndex) => (
                <Cell
                  focusedCell={this.state.focusedCell}
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
