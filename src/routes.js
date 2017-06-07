import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';

const customHistory = createBrowserHistory()

const routes = (
  <Router history={customHistory}>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export default routes