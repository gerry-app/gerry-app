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

const districtColors = ["#D8334A", "#48CFAD", "#4FC1E9", "#FFCE54", "#A0D468"];

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      district: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.district) {
      this.setState({ district: nextProps.cell.district })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.props.cell.id, this.state.district, nextProps.cell.district);
    return this.state.district !== nextProps.cell.district;
    // TODO
  }

  render() {
    const { classes, cell, onMouseDown, onMouseUp, onMouseEnter } = this.props;
    console.log('upate');
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
