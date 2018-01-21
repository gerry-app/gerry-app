import React from "react";
import injectSheet from "react-jss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { STATE_CODE_TO_NAME } from "../../../constants";
import MissionGerrymander from "./MissionGerrymander";
import { getStateGrid } from "../actions";

const styles = {
  sexy: {
    fontFamily: "Atlas Grotesk",
    fontWeight: 300,
    fontSize: "11px",
    marginLeft: "40px",
    marginTop: "20px",
    textTransform: "uppercase",
  },
  concepts: {
    "& > li": {
      marginTop: "12px",
    },
  },
  task: {
    display: "block",
    marginTop: "12px",
  },
  or: {
    fontFamily: "Atlas Grotesk",
    fontSize: "13px",
    display: "block",
    marginTop: "30px",
    textAlign: "center",
  },
};

const abbrv = "AR";

class PopulationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  componentDidMount() {
    this.props.getStateGrid(abbrv);
  }

  handleModalOpen = () => {
    this.setState({ open: true });
  };

  handleModalClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { isFetching, error, grid, classes } = this.props;
    const { open } = this.state;
    if (error) {
      return <p className={classes.sexy}>We have encountered an error.</p>;
    } else if (isFetching) {
      return <p className={classes.sexy}>Loading...</p>;
    }
    const modalActions = [
      <FlatButton
        label="proceed"
        primary={true}
        onClick={this.handleModalClose}
      />,
    ];
    return (
      <div>
        <Helmet>
          <title>{`Mission in ${STATE_CODE_TO_NAME[abbrv]}`}</title>
        </Helmet>
        {grid && (
          <div>
            <Dialog
              title={`Mission 1: Population Fundamentals`}
              actions={modalActions}
              modal={false}
              open={open}
              autoScrollBodyContent={true}
              onRequestClose={this.handleModalClose}
            >
              There are three fundamental concepts of redistricting. These are:
              <ul className={classes.concepts}>
                <li>
                  <b>Population Equality</b> - Each election district must have
                  the same number of constituents. In The Redistricting Game,
                  this number ranges between 640,000 - 650,000 people,
                  approximating the size of current U.S. congressional
                  districts. At the federal level, courts tend to enforce the
                  population equality standard very strictly.<br />
                </li>
                <li>
                  <b>Contiguity</b> - Each district must be one continuous
                  shape. No "land islands" are allowed. U.S. courts always
                  enforce the principle of contiguity.<br />
                </li>
                <li>
                  <b>Compactness</b> - Generally speaking, districts need to be
                  drawn in compact shapes. Extremely jagged edges and skinny
                  extensions are features that are the hallmarks of
                  gerrymandered districts. Because compactness is a traditional
                  standard about which there is no generally accepted method of
                  measurement, the courts in most states do not usually enforce
                  the compactness principle in practice.<br />
                </li>
              </ul>
              <u className={classes.task}>
                Task: Balance populations within a 5,000-constituent margin.
              </u>
            </Dialog>
            <MissionGerrymander
              grid={grid}
              mission="population"
              abbrv={abbrv}
            />
          </div>
        )}
        <Link to="/mission/partisan" className={classes.or}>
          Next Mission: Partisan Gerrymandering
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  grid: state.core.stateGrid,
  isFetching: state.core.isFetching,
  error: state.core.error,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getStateGrid }, dispatch);
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    injectSheet(styles)(PopulationPage),
  ),
);
