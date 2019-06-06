import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import AllProjects from '../containers/AllProjects';
import SignUpForm from '../components/forms/SignUpForm';
import { GlobalStyle } from './styled-app/StyledApp';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={AllProjects} />
        <Route exact path="/signup" component={SignUpForm} />
      </Switch>
    </Router>
  );
}
