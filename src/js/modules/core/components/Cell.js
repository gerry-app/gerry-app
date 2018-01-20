import React from "react";
import injectSheet from "react-jss";
import { CELL_SIZE, GET_DISTRICT_COLOR } from "../../../constants";

const styles = {
  Cell: {
    display: "inline-block",
    height: CELL_SIZE,
    width: CELL_SIZE,
    userSelect: "none",
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
      this.setState({ district: this.props.cell.district });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.district !== nextProps.cell.district) {
      this.state.district = nextProps.cell.district;
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
          backgroundColor: cell ? GET_DISTRICT_COLOR(cell.district) : "#fff",
        }}
      />
    );
  }
}

export default injectSheet(styles)(Cell);
