import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";

import Cell from "./Cell";
import { refreshWindowDimensions } from "../actions";

const styles = {
  row: {
    height: "20px",
  },
};

class Gerrymander extends React.PureComponent {
  constructor(props) {
    super(props);
    let districts = {};
    this.props.grid.forEach(row => {
      row.forEach(cell => {
        const districtNum = `${cell.district}`;
        if (districtNum in districts) {
          districts[districtNum] += cell.population;
        } else {
          console.log(districtNum, cell);
          districts[districtNum] = cell.population;
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
      districts[`${focusedCell.district}`] += cell.population;
      districts[`${cell.district}`] -= cell.population;
      grid[cell.row][cell.col].district = focusedCell.district;
      this.setState({ rerender: !this.state.rerender });
    }
  };

  render() {
    const { classes } = this.props;
    const { grid } = this.state;
    return (
      <div>
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
