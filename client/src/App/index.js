import React from "react";
import { Switch, Route } from "react-router-dom";

import { HOME_PAGE, LOGIN_PAGE } from "../Utils/routes.constant";

import { LoggedOutRoutes, PrivateRoutes } from "./Routes";

import { LandingPage, Login, Layout, NotFound } from "../Pages";

import "./style.css";

const App = () => (
  <div className="App">
    <Layout>
      <Switch>
        <Route exact path={HOME_PAGE}>
          <LandingPage />
        </Route>
        <LoggedOutRoutes exact path={LOGIN_PAGE}>
          <Login />
        </LoggedOutRoutes>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  </div>
);

export default App;
