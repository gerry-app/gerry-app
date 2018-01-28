import React from "react";
import injectSheet from "react-jss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import { STATE_CODE_TO_NAME } from "../../../constants";
import { Gerrymander } from "./";
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
};

class DistrictsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  componentDidMount() {
    this.props.getStateGrid(this.props.match.params.state_code);
  }

  handleModalOpen = () => {
    this.setState({ open: true });
  };

  handleModalClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { isFetching, error, grid, match, classes } = this.props;
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
    const stateName = STATE_CODE_TO_NAME[match.params.state_code];
    return (
      <div>
        <Helmet>
          <title>{`The State of ${stateName}`}</title>
        </Helmet>
        {grid && (
          <div>
            <Dialog
              title={`Visualization: ${stateName} Redistricted Map`}
              actions={modalActions}
              modal={false}
              open={open}
              onRequestClose={this.handleModalClose}
            >
              Drag areas of each district into other districts and watch the
              constituent political balance change.
            </Dialog>
            <Gerrymander grid={grid} match={match} />
          </div>
        )}
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
    injectSheet(styles)(DistrictsPage),
  ),
);
