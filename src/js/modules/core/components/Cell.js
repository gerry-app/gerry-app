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

  render() {
    const { classes, cell, focusedCell, onMouseDown, onMouseUp, onMouseEnter } = this.props;
    return (
      <div
        className={classes.Cell}
        onMouseDown={() => onMouseDown(cell)}
        onMouseUp={onMouseUp}
        onMouseEnter={() => onMouseEnter(cell)}
        style={{ backgroundColor: cell ? districtColors[cell.district] : "#fff" }}
      />
    );
  }
};

export default injectSheet(styles)(Cell);
