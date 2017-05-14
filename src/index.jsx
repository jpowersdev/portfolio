import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Blog from './components/blog.jsx'
import Home from './components/home.jsx'
import Landing from './components/landing.jsx'

render (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/landing" component={Landing}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);
