import React from 'react'
import {Link} from 'react-router-dom'
import {Label} from 'semantic-ui-react'
import Markdown from 'markdown-to-jsx'

import '../styles/post.styl'

function TagList(props) {
  const tags = props.tags;
  const taglist = tags.map((tag, index) =>
      <Label key={index}>{tag}</Label>
  )
  return (
    <div className="row taglist">
      {taglist}
    </div>
  );
}

const TitleBar = (props) => (
  <div className="ui grid titlebar">
    <div className="sixteen wide column timestamp">
        {props.data.timestamp}
    </div>
    <div className="sixteen wide column header">
      <h1 className="title">{props.data.title}</h1>
      <h2 className="subtitle">{props.data.subtitle}</h2>
      <TagList tags={props.data.tags}/>
    </div>
  </div>
)

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
      <div className="post ui segment">
        <TitleBar data={this.state.data}/>
        <hr/>
        <Markdown>
          {this.state.data.markdown}
        </Markdown>
      </div>

    )
  }
}

export default Post;
