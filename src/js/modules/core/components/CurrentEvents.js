import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import { Helmet } from "react-helmet";

import { getCurrentEvents } from "../actions";

const styles = {
  CurrentEvents: {
    maxWidth: "940px",
    margin: "0 auto",
  },
  term: {
    "& b": {
      fontFamily: "Super Grotesk",
    },
    "& p": {
      margin: "0 0 1em 0",
    },
  },
  articles: {
    listStyle: "circle inside",
  },
};

class CurrentEvents extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (!this.props.currentEvents) {
      this.props.getCurrentEvents();
    }
  }

  render() {
    const { classes, currentEvents } = this.props;

    return (
      <div className={classes.CurrentEvents}>
        <Helmet>
          <title>Current Events</title>
        </Helmet>
        <div className={classes.term}>
          <b>
            Gerry is designed to educate, engage, and empower citizens around the
            issue of political redistricting.
          </b>
          <p>
            Here is a selection of articles from current events:
          </p>
          <ul className={classes.articles}>
          {currentEvents ? (
            currentEvents.map(url => <li><a href={url}>{url}</a></li>)
          ) : <p>Loading...</p>}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentEvents: state.core.currentEvents,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getCurrentEvents }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(CurrentEvents));
