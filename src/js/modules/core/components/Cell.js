import React from "react";
import injectSheet from "react-jss";

const styles = {
  Cell: {
    display: "inline-block",
    height: "30px",
    width: "30px",
    userSelect: "none",
  },
};

const districtColors = ["#A0CECB", "#7DB1B1", "#4FC1E9", ];

const Cell = ({ classes, cell, focusedCell, onMouseDown, onMouseUp }) => {
  const handleMouseEnter = () => {
    if (focusedCell && focusedCell.district !== cell.district) {
      console.log('changed cell')
      cell.district = focusedCell.district;
    }
  }

  return (
    <div
      className={classes.Cell}
      onMouseDown={() => onMouseDown(cell)}
      onMouseUp={onMouseUp}
      onMouseEnter={handleMouseEnter}
      style={{ backgroundColor: cell ? districtColors[cell.district] : "#fff" }}
    />
  );
};

export default injectSheet(styles)(Cell);
