import React from "react";
import injectSheet from "react-jss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
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

const abbrv = 'OR';

class MissionPage extends React.Component {
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
    this.setState({open: true});
  };

  handleModalClose = () => {
    this.setState({open: false});
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
              title={`Mission 2: Partisan Gerrymander`}
              actions={modalActions}
              modal={false}
              open={open}
              onRequestClose={this.handleModalClose}
            >
              The essence of a partisan gerrymander is manipulating district lines around a set of voters that will elect your party's candidate. The two principle tactics used in gerrymandering are "cracking" and "packing."<br/>
              <b>Cracking - </b>
              Spreading like-minded voters apart across multiple districts to dilute their voting power in each. This denies the group representation in multiple districts.<br/>
              <b>Packing - </b>
Concentrating like-minded voters together in one district to reduce their voting power in other districts. This gives the group representation in a single district while denying them representation across districts.
<u className={classes.task}>Task: Try to give the Democrats an advantage in this sate. Do you expect it to be hard?</u>
            </Dialog>
            <MissionGerrymander grid={grid} />
          </div>
        )}
        <Link to="/glossary" className={classes.or}>See the glossary.</Link>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  grid: state.core.stateGrid,
  isFetching: state.core.isFetching,
  error: state.core.error,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getStateGrid }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(MissionPage)));
