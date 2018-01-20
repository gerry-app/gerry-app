import React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import Cell from "./Cell";
import Dashboard from "./Dashboard";
import { CELL_SIZE, GET_DISTRICT_COLOR, STATE_CODE_TO_NAME } from "../../../constants";
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
      modalOpen: true,
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

  handleModalOpen = () => {
    this.setState({modalOpen: true});
  };

  handleModalClose = () => {
    this.setState({modalOpen: false});
  };

  render() {
    const { classes, match } = this.props;
    const { grid, districts, modalOpen } = this.state;
    const modalActions = [
      <FlatButton
        label="proceed"
        primary={true}
        onClick={this.handleModalClose}
      />,
    ];
    return (
      <div>
        <Helmet>
          <title>{`The State of ${STATE_CODE_TO_NAME[match.params.state_code]}`}</title>
        </Helmet>
        <Dialog
          title="Mission: Partisan Gerrymander"
          actions={modalActions}
          modal={false}
          open={modalOpen}
          onRequestClose={this.handleModalClose}
        >
          This map represents the most recent redistricting of {STATE_CODE_TO_NAME[match.params.state_code]}.
        </Dialog>
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
