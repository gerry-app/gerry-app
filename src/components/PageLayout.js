import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const styles = {
  sidebarContainer: {
    position: 'fixed',
    top: 0,
    left: '8px',
    zIndex: '1000',
    padding: '60px 28px 64px 28px',
    height: '100%',
    width: '154px',
    textAlign: 'center',
    lineHeight: 1.2,
    '& a': {
      color: '#000 !important',
    },
  },
  logo: {
    fontSize: '23px',
    fontFamily: 'Atlas Grotesk',
    letterSpacing: '0.05em',
    marginBottom: '30px',
    fontWeight: 700,
    display: 'block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    paddingLeft: '0.35em',
  },
  pageContent: {
    padding: '64px 28px 64px 0',
    marginLeft: '210px',
    minHeight: '100vh',
  },
  pageNavMain: {
    '& > li': {
      marginBottom: '0.5em',
      '& > a': {
        textDecoration: 'none',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        paddingLeft: '0.35em',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
  pageNavMeta: {
    margin: '28px 0',
    '& > li': {
      marginBottom: '0.5em',
      '& > a': {
        textDecoration: 'none',
        paddingLeft: '0.35em',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
};

const PageLayout = ({ classes, children, location }) => {
  return (
    <div>
      <div className={classes.sidebarContainer}>
        <Link className={classes.logo} to="/">
          Gerry
        </Link>
        <ul className={classes.pageNavMain}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/glossary">Glossary</Link>
          </li>
          <li>
            <a href="http://www.redistrictinggame.org/resources/beginnersguide.pdf">
              Learn More
            </a>
          </li>
          <li>
            <a href="https://www.nationalpriorities.org/take-action/contact-your-representative/">
              Take Action
            </a>
          </li>
          <li>
            <Link to="/current-events">Latest News</Link>
          </li>
        </ul>
        <ul className={classes.pageNavMeta}>
          <li>
            <a href="https://www.irs.gov/businesses/small-businesses-self-employed/state-government-websites">
              State Links
            </a>
          </li>
          <li>
            <a href="https://ballotpedia.org/State-by-state_redistricting_procedures">
              How My State Does It
            </a>
          </li>
          <li>
            <a href="https://github.com/gerry-app">GitHub</a>
          </li>
          <li>
            <a href="http://www.redistrictingthenation.com/glossary.aspx">
              Tell Friends
            </a>
          </li>
        </ul>
      </div>
      <div
        className={classes.pageContent}
        style={{
          backgroundColor:
            location.pathname.includes('/state/') ||
            location.pathname.includes('/mission/') ||
            location.pathname === '/'
              ? 'aliceblue'
              : '#fff',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default withRouter(injectSheet(styles)(PageLayout));
