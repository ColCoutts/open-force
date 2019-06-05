import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllProjects from '../containers/AllProjects';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProjects} />
      </Switch>
    </Router>
  );
}
