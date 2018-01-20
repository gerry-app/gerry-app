import React from "react";
import injectSheet from "react-jss";
import { Helmet } from "react-helmet";

const styles = {
  AboutPage: {
    maxWidth: "940px",
    margin: "0 auto",
  },
  sexy: {
    fontFamily: "Atlas Grotesk",
    fontWeight: 300,
    fontSize: "11px",
    textTransform: "uppercase",
  },
  elbridge: {
    width: "60vw",
  },
  term: {
    "& b": {
      fontFamily: "Super Grotesk",
    },
    "& p": {
      margin: "0 0 1em 0",
    },
  },
};

const AboutPage = ({ classes }) => {
  return (
    <div className={classes.AboutPage}>
      <Helmet>
        <title>About Gerry App</title>
      </Helmet>
      <p className={classes.sexy}>Elbridge Gerry</p>
      <img src="/img/elbridge_gerry.svg" className={classes.elbridge} />
      <div className={classes.term}>
        <b>
          Gerry is designed to educate, engage, and empower citizens around the
          issue of political redistricting.
        </b>
        <p>
          Currently, the political system in most states allows the state
          legislators themselves to draw the lines. This system is subject to a
          wide range of abuses and manipulations that encourage incumbents to
          draw districts which protect their seats rather than risk an open
          contest.
        </p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(AboutPage);
