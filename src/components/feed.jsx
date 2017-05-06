import React from 'react'
import {Link} from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Post from './post.jsx'

import '../styles/feed.styl'
import File from '../archive/untitled.md'

const PostList = (props) => (
  <div className="ui feed">
    <p>{props.list}</p>
    <Post file="untitled.md"/>
  </div>
)

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container className="container">
        <PostList/>
      </Container>
    )
  }
};

export default Feed;
