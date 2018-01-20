import React from "react";
import injectSheet from "react-jss";
import Sidebar from "./Sidebar";

const styles = {
  sidebarContainer: {
    position: "fixed",
    top: 0,
    left: "8px",
    zIndex: "1000",
    padding: "140px 28px 64px 28px",
    height: "100%",
    width: "210px",
    textAlign: "center",
    lineHeight: 1.2,
  },
  pageContent: {
    padding: "64px 28px 64px 210px",
  },
};

const PageLayout = ({ classes, children }) => {
  return (
    <div>
      <div className={classes.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={classes.pageContent}>
        {children}
      </div>
    </div>
  );
};

export default injectSheet(styles)(PageLayout);