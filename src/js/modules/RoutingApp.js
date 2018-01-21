import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import appHistory from "tools/appHistory";
import {
  DistrictsPage,
  HomePage,
  PageLayout,
  Glossary,
  AboutPage,
  MissionPage,
  PopulationPage,
} from "./core/components";
import ConnectedRouter from "react-router-redux/ConnectedRouter";

const RoutingApp = () => {
  return (
    <ConnectedRouter history={appHistory}>
      <PageLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/state/:state_code" component={DistrictsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/glossary" component={Glossary} />
          <Route exact path="/mission/partisan" component={MissionPage} />
          <Route exact path="/mission/population" component={PopulationPage} />
        </Switch>
      </PageLayout>
    </ConnectedRouter>
  );
};

export default RoutingApp;
