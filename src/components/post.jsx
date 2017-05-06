import React from 'react'
import {Link} from 'react-router-dom'
import Markdown from 'markdown-to-jsx';

import '../styles/post.styl'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: props.file,
      data: null
    }
  }

  componentDidMount() {
    var filename = "http://localhost:5001/archive/"+this.state.file;

    fetch(filename)
      .then(response => response.json())
      .then((data) => { this.setState({ data: data }); });
  }
  render () {
    if (!this.state.data) {
      return (
          <div>Loading</div>
      )
    }
    return (
      <div className="post">
          <h1 className="title">{this.state.data.title}</h1>
          <h2 className="subtitle">{this.state.data.subtitle}</h2>
          <Markdown>
            {this.state.data.markdown}
          </Markdown>
      </div>

    )
  }
}

export default Post;
