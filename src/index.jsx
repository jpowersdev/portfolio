import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './styles/font-awesome.min.css';

import Blog from './components/blog.jsx'
import Home from './components/home.jsx'

render (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Blog}/>
        <Route exact path="/blog" component={Home}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('app')
);
