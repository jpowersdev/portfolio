import React from 'react'
import { Link } from 'react-router-dom'
import { Label, Loader } from 'semantic-ui-react'

import remark from 'remark';
import reactRenderer from 'remark-react';
import RemarkLowlight from '../../scripts/react-lowlight';

import javascript from 'highlight.js/lib/languages/javascript';

import merge from 'deepmerge';
import sanitizeGhSchema from 'hast-util-sanitize/lib/github.json';

const schema = merge(sanitizeGhSchema, { attributes: { 'code': ['className'] } });

import '../../styles/post.styl'
import '../../styles/github-gist.css'

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
      <TagList tags={props.data.tags} load={props.load}/>
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
    var filename = "/archive/"+this.state.file;

    fetch(filename)
      .then(response => response.json())
      .then((data) => { this.setState({ data: data }); })
      .catch((err) => console.log(err));
  }
  render () {
    if (!this.state.data) {
      return (
          <div className="post ui segment">
            <Loader active inline='centered' />
          </div>
      )
    }
    return (
      <div className="post ui segment">
        <TitleBar data={this.state.data} load={this.state.load}/>
        <hr/>
        <div className="markdown">
          {
            remark().use(reactRenderer, {
              sanitize: schema,
              remarkReactComponents: {
                code: RemarkLowlight()
              }
            }).processSync(this.state.data.markdown).contents
          }
        </div>
      </div>

    )
  }
}

export default Post;
