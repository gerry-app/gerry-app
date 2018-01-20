import React from "react";
import injectSheet from "react-jss";

const styles = {
  Cell: {
    display: "inline-block",
    height: "20px",
    width: "20px",
    userSelect: "none",
  },
};

const districtColors = ["#D8334A", "#48CFAD", "#4FC1E9", ];

class Cell extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMouseEnter = () => {
    const { focusedCell, cell } = this.props;
    if (focusedCell && focusedCell.district !== cell.district) {
      cell.district = focusedCell.district;
      this.forceUpdate();
    }
  }

  render() {
    const { classes, cell, focusedCell, onMouseDown, onMouseUp } = this.props;
    return (
      <div
        className={classes.Cell}
        onMouseDown={() => onMouseDown(cell)}
        onMouseUp={onMouseUp}
        onMouseEnter={this.handleMouseEnter}
        style={{ backgroundColor: cell ? districtColors[cell.district] : "#fff" }}
      />
    );
  }
};

export default injectSheet(styles)(Cell);
