import React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const styles = {
  sidebarContainer: {
    position: "fixed",
    top: 0,
    left: "8px",
    zIndex: "1000",
    padding: "60px 28px 64px 28px",
    height: "100%",
    width: "154px",
    textAlign: "center",
    lineHeight: 1.2,
  },
  logo: {
    marginTop: 0,
    fontSize: "28px",
    fontFamily: "Helvetica",
    letterSpacing: "0.05em",
  },
  pageContent: {
    padding: "64px 28px 64px 210px",
  },
  pageNavMain: {
    "& > li": {
      marginBottom: "0.5em",
      "& > a": {
        color: "#000",
        textDecoration: "none",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        paddingLeft: "0.35em",
        "&:hover, &:active, &:focus": {
          color: "#000",
          textDecoration: "underline",
        },
      },
    },
  },
  pageNavMeta: {
    margin: "28px 0",
    "& > li": {      
      marginBottom: "0.5em",
      "& > a": {
        color: "#000",
        textDecoration: "none",
        paddingLeft: "0.35em",
        "&:hover, &:active, &:focus": {
          color: "#000",
          textDecoration: "underline",
        },
      },
    }
  }
};

const PageLayout = ({ classes, children }) => {
  return (
    <div>
      <div className={classes.sidebarContainer}>
        <p className={classes.logo}>Gerry</p>
        <ul className={classes.pageNavMain}>
          <li><a href="/about">About</a></li>
          <li><Link to="/glossary">Glossary</Link></li>
          <li><a href="/">Learn More</a></li>
          <li><a href="/">Take Action</a></li>
        </ul>
        <ul className={classes.pageNavMeta}>
          <li><a href="https://www.irs.gov/businesses/small-businesses-self-employed/state-government-websites">State Links</a></li>
          {/* possibly we could do a page for state links if time */}
          <li><Link to="/glossary">Glossary</Link></li>
          <li><a href="http://www.redistrictingthenation.com/glossary.aspx">Tell Friends</a></li>
        </ul>
      </div>
      <div className={classes.pageContent}>
        {children}
      </div>
    </div>
  );
};

export default withRouter(injectSheet(styles)(PageLayout));