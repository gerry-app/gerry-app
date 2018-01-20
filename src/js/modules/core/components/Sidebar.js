import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

const styles = {
  pageNavMain: {
    "& > ul > li": {
      marginBottom: "0.5em",
      "& a": {
        color: "#000",
        textDecoration: "none",
        letterSpacing: "0.35em",
        textTransform: "uppercase",
        paddingLeft: "0.35em",
        "&:hover, &:active, &:focus": {
          color: "#000",
        },
      },
    },
  },
};

const Sidebar = ({ classes, children }) => {
  return (
    <div>
      <div className={classes.pageNavMain}>
        <ul>
          <li><a href="/">About</a></li>
          <li><a href="/">View Your Rep</a></li>
          <li><a href="/">Learn More</a></li>
          <li><a href="/">Take Action</a></li>
        </ul>
      </div>
      <div className={classes.pageNavMeta}>
        <ul>
          <li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/state-government-websites">State Links</a></li>
        {/* possibly we could do a page for state links if time */}
          <li><Link to="/glossary">Glossary</Link></li>
          <li><a href="http://www.redistrictingthenation.com/glossary.aspx">Tell Friends</a></li>
        </ul>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Sidebar);