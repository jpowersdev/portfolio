import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Loader } from 'semantic-ui-react'

import Post from './post.jsx'

import '../../styles/feed.styl'

function PostList(props) {
  const list = props.list;
  const listItems = list.map((item, index) =>
    <Post key={index} file={item}/>
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list
    }
  }
  render() {
    return (
      <PostList list={this.state.list}/>
    )
  }
};

export default Feed;
