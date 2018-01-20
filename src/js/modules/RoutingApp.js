import Provider from "react-redux/lib/components/Provider";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import appHistory from "tools/appHistory";
import { MainApp, HomePage, PageLayout, Glossary } from "./core/components";
import ConnectedRouter from "react-router-redux/ConnectedRouter";
import store from "../store";

class RoutingApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={appHistory}>
          <PageLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/glossary" component={Glossary} />
            </Switch>
          </PageLayout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default RoutingApp;
