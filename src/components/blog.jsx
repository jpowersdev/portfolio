import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Feed from './feed.jsx'

const Header = () => (
  <div className="header">
    <h1>Jon Powers</h1>
    <h4>This is my blog</h4>
  </div>
)

const Sidebar = () => (
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
  </ul>
)

const Blog = ({match}) => (
  <Router>
    <div>
      <Header/>
      <div className="row">
        <div className="col-9">
          <Feed topic="cats"/>
        </div>
        <div className="col-3">
          <Sidebar/>
        </div>
      </div>
    </div>
  </Router>
);

export default Blog;
