import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {
  landing as landingRoutes,
  dashboard as dashboardRoutes
} from "./index";

import LandingLayout from "../layout/Landing";
import DashboardLayout from "../layout/Dashboard";
import ScrollToTop from "../components/common/ScrollToTop";


const childRoutes = (Layout, routes) =>
  routes.map(({children, path, component: Component, exact, name, withHeader}, index) =>
    children ? (
      // Route item with children
      children.map(({path, component: Component, exact, name, withHeader}, index) => (
        <Route
          key={index}
          path={path}
          exact={exact}
          render={props => (
            <Layout>
              <Component ComponentName={name} withHeader={withHeader} {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact={exact}
        render={props => (
          <Layout>
            <Component ComponentName={name} withHeader={withHeader} {...props} />
          </Layout>
        )}
      />
    )
  );

// const basename = '/';
const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        {childRoutes(DashboardLayout, landingRoutes)}
        {/* {childRoutes(DashboardLayout, dashboardRoutes)} */}
        {/*{childRoutes(AdminDashboardLayout, adminDashboardRoutes)}*/}
        <Redirect from="/dashboard/*" to="/dashboard"/>
        <Redirect from="*" to="/"/>
      </Switch>
    </ScrollToTop>
  </Router>
);

export default Routes;
