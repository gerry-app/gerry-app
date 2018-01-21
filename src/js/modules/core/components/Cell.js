import React from "react";
import injectSheet from "react-jss";
import { CELL_SIZE, GET_DISTRICT_COLOR } from "../../../constants";

const styles = {
  Cell: {
    display: "inline-block",
    height: CELL_SIZE,
    width: CELL_SIZE,
    userSelect: "none",
    boxSizing: "border-box",
    "&:hover": {
      border: "2px solid #ddd",
    },
  },
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      district: null,
    };
  }

  componentWillMount() {
    if (!this.state.district) {
      this.setState({ district: this.props.cell.dis });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.district !== nextProps.cell.dis) {
      this.state.district = nextProps.cell.dis;
      return true;
    }
    return false;
  }

  render() {
    const { classes, cell, onMouseDown, onMouseUp, onMouseEnter } = this.props;
    return (
      <div
        className={classes.Cell}
        onMouseDown={() => onMouseDown(cell)}
        onMouseUp={onMouseUp}
        onMouseEnter={() => onMouseEnter(cell)}
        style={{
          backgroundColor: cell ? GET_DISTRICT_COLOR(cell.dis) : "#fff",
        }}
      />
    );
  }
}

export default injectSheet(styles)(Cell);
