import { STATES } from "./data/states";

export const getStateGrid = (state, props) => STATES[props.match.params.state_code];