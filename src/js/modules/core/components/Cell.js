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

const districtColors = ["#D8334A", "#48CFAD", "#4FC1E9", "#FFCE54", "#A0D468", "#888888", ];

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      district: null,
    };
  }

  componentWillMount() {
    if (!this.state.district) {
      this.setState({ district: this.props.cell.district })
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
        style={{ backgroundColor: cell ? districtColors[cell.district] : "#fff" }}
      />
    );
  }
};

export default injectSheet(styles)(Cell);
