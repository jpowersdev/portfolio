import React from 'react'
import {Link} from 'react-router-dom'

import Post from './post.jsx'

const PostList = (props) => (
  <div className="ui feed">
  <Post postnum={1} score="28.2k"/>
  <Post postnum={1} score="28.2k"/>
  <Post postnum={1} score="28.2k"/>
  </div>
)

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {topic: props.topic}
  }
  render() {
    return (
      <div>
        <h1>{this.state.topic}</h1>
        <PostList/>
      </div>
    )
  }
};

export default Feed;
