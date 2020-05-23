import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  DistrictsPage,
  UnitedStates,
  PageLayout,
  Glossary,
  AboutPage,
  // MissionPage,
  // PopulationPage,
  // CurrentEvents,
} from './components';

const RoutingApp = () => {
  return (
    <PageLayout>
      <Switch>
        <Route exact path="/" component={UnitedStates} />
        <Route exact path="/state/:state_code" component={DistrictsPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/glossary" component={Glossary} />
        {/* <Route exact path="/current-events" component={CurrentEvents} /> */}
        {/* <Route exact path="/mission/partisan" component={MissionPage} /> */}
        {/* <Route exact path="/mission/population" component={PopulationPage} /> */}
      </Switch>
    </PageLayout>
  );
};

export default RoutingApp;
