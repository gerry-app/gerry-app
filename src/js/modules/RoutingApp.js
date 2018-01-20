import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import appHistory from "tools/appHistory";
import { MainApp, HomePage, PageLayout, Glossary, AboutPage } from "./core/components";
import ConnectedRouter from "react-router-redux/ConnectedRouter";

const RoutingApp = () => {
  return (
    <ConnectedRouter history={appHistory}>
      <PageLayout>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route exact path={"/glossary"} component={Glossary} />
        </Switch>
       </PageLayout>
    </ConnectedRouter>
  );
};

export default RoutingApp;
