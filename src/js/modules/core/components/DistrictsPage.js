import React from "react";
import injectSheet from "react-jss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { STATE_CODE_TO_NAME } from "../../../constants";
import { Gerrymander } from "./";
import { getStateGrid } from "../actions";

const styles = {
};

class DistrictsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      open: true,
    }
  }

  componentDidMount() {
    this.props.getStateGrid(this.props.match.params.state_code);
  }

  handleModalOpen = () => {
    this.setState({open: true});
  };

  handleModalClose = () => {
    this.setState({open: false});
  };

  render() {
    const { isFetching, error, grid, match } = this.props;
    const { open } = this.state;
    if (isFetching || error) {
      return null;
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
          <title>{`The State of ${STATE_CODE_TO_NAME[match.params.state_code]}`}</title>
        </Helmet>
        {grid && (
          <div>
            <Dialog
              title="Mission: Partisan Gerrymander"
              actions={modalActions}
              modal={false}
              open={open}
              onRequestClose={this.handleModalClose}
            >
              This map represents the most recent redistricting of {STATE_CODE_TO_NAME[match.params.state_code]}.
            </Dialog>
            <Gerrymander grid={grid} match={match} />
          </div>
        )}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(DistrictsPage)));
