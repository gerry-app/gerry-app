import React from 'react';
import injectSheet from 'react-jss';
import { CELL_SIZE, STATE_CODE_TO_COLOR_INDEX } from '../constants';

const stateColors = ['#D8334A', '#48CFAD', '#4FC1E9', '#FFCE54'];

const styles = {
  State: {
    backgroundColor: 'aliceblue',
    display: 'inline-block',
    height: CELL_SIZE,
    width: CELL_SIZE,
    userSelect: 'none',
  },
};

const State = ({ classes, state, onClick, onMouseEnter, onMouseLeave }) => {
  if (!state) {
    return <div className={classes.State} />;
  }
  return (
    <div
      className={classes.State}
      onMouseLeave={onMouseLeave}
      onMouseEnter={() => onMouseEnter(state)}
      onClick={() => onClick(state)}
      style={{
        backgroundColor: stateColors[STATE_CODE_TO_COLOR_INDEX[state.code]],
      }}
    />
  );
};

export default injectSheet(styles)(State);
