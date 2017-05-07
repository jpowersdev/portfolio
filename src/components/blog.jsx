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
    <h2 id="subtitle">Has a blog</h2>
  </div>
);

var tags = ['node','react','js','html5','css'];
var archive = [new Date(), new Date(), new Date()];

const Tag = (props) => (
  <p className="tag">{props.value}</p>
)

function TagList(props) {
  const list = tags;
  const taglist = list.map((item, index) =>
    <Tag key={index} value={item}/>
  );
  return (
    <div className="taglist">
      <h3>Tags</h3>
      {taglist}
    </div>
  );
}

const Month = (props) => (
  <p className="month">{props.value.toDateString()}</p>
)

function Archive(props) {
  const list = archive;
  const monthlist = list.map((item, index) =>
    <Month key={index} value={item}/>
  );
  return (
    <div className="archive">
      <h3>Archive</h3>
      {monthlist}
    </div>
  );
}

const Blog = () => (
    <div id="blog">
      <Header/>
      <div className="ui grid">
        <div className="two wide column">
          <TagList/>
        </div>
        <div className="eleven wide column">
          <Feed list={["untitled.md", "untitled.md"]}/>
        </div>
        <div className="three wide column">
          <Archive/>
        </div>
      </div>
    </div>
);

export default Blog;
