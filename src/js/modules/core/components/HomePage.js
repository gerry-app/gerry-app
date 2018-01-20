import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

const styles = {};

const HomePage = ({ classes }) => {
  return <Link to="/state/NY">enter NY</Link>;
};

export default injectSheet(styles)(HomePage);
