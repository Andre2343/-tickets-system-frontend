import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import TicketDetails from 'pages/TicketDetails';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SingUp';
import AppLayout from 'components/layout/AppLayout';
import routePaths from './routePaths';

const routes = [
  {
    path: routePaths.home,
    component: Home,
  },
  {
    path: routePaths.payment,
    component: TicketDetails,
  },
  {
    path: routePaths.login,
    component: Login,
  },
  {
    path: routePaths.signUp,
    component: SignUp,
  },
];

const RootRouter = () => (
  <Router>
    <Switch>
      <AppLayout>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} exact />
        ))}
      </AppLayout>
    </Switch>
  </Router>
);

export default RootRouter;
