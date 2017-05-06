import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './styles/main.styl';
import './styles/font-awesome.min.css';

import Blog from './components/blog.jsx'
import Home from './components/home.jsx'

render (
    <Router>
      <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/blog" component={Blog}/>
      </Switch>
    </div>
    </Router>,
    document.getElementById('app')
);
