import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Feed from './feed.jsx'

import '../styles/blog.styl'

const Header = () => (
  <div className="header">
    <h1 id="title">Jon Powers</h1>
    <h3 id="subtitle">This is my blog</h3>
  </div>
);

var tags = [];
var archive = new Date();

const Tags = () => (
  <div className="tags">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
);

const Archive = () => (
  <div className="archive">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
);

const Blog = (props) => (
    <div>
      <Header/>
      <div className="ui grid">
        <div className="three wide column">
          <Tags/>
        </div>
        <div className="ten wide column">
          <Feed list={props.feed}/>
        </div>
        <div className="three wide column">
          <Archive/>
        </div>
      </div>
    </div>
);

export default Blog;
