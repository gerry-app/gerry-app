import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const styles = {};

const HomePage = ({ classes }) => {
  return (
    <div>      
      <Helmet>
        <title>The Gerry App</title>
      </Helmet>
      <Link to="/state/NY">enter NY</Link>
    </div>
  );
};

export default injectSheet(styles)(HomePage);
