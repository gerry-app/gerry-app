import React from 'react';
import ReactDOM from 'react-dom';
import configureStore, { history } from './configureStore';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import {
  DistrictsPage,
  UnitedStates,
  PageLayout,
  Glossary,
  AboutPage,
  // MissionPage,
  PopulationPage,
  CurrentEvents,
} from './components';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={UnitedStates} />
          <Route exact path="/state/:state_code" component={DistrictsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/glossary" component={Glossary} />
          <Route exact path="/current-events" component={CurrentEvents} />
          {/* <Route exact path="/mission/partisan" component={MissionPage} /> */}
          <Route exact path="/mission/population" component={PopulationPage} />
        </Switch>
      </PageLayout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
