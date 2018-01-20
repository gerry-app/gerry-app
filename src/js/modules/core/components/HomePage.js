import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import { UnitedStates } from "./";

const styles = {};

const HomePage = ({ classes }) => {
  return (
    <div>      
      <Helmet>
        <title>The Gerry App</title>
      </Helmet>
      <UnitedStates />
    </div>
  );
};

export default injectSheet(styles)(HomePage);
