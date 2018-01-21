import { STATES } from "./data/states";

export const getStateGrid = (state, props) => STATES[props.state.code];