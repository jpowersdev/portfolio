import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Loader } from 'semantic-ui-react'

import Header from './header.jsx'
import Feed from './feed.jsx'
import Archive from './archive.jsx'
import TagList from './taglist.jsx'

import '../styles/blog.styl'

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filelist: null,
      taglist: null,
      archive: null,
      month_filter: false,
      tag_filter: false,
      loaded: false
    }
    this.loadAll = this.loadAll.bind(this);
    this.loadTag = this.loadTag.bind(this);
    this.loadMonth = this.loadMonth.bind(this);
  }

  loadTag(tag) {
    this.setState({loaded: false, month_filter: false})
    if (this.state.tag_filter) {
      this.setState({tag_filter: false});
      this.loadAll();
    }
    else {
      fetch('/tags/'+tag)
        .then(response => response.json())
        .then((data) => {
          this.setState({
            filelist: data.files,
            taglist: data.tags,
            archive: data.archive,
            tag_filter: true,
            loaded: true
          })
        }).catch((err) => console.log(err));
    }
  }

  loadMonth(month) {
    this.setState({loaded: false, tag_filter: false})
    if (this.state.month_filter) {
      this.setState({month_filter: false});
      this.loadAll();
    }
    else {
      fetch('/months/'+month)
        .then(response => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            filelist: data.files,
            taglist: data.tags,
            archive: data.archive,
            month_filter: true,
            loaded: true
          })
          console.log(this.state);
        }).catch((err) => console.log(err));
    }
  }

  loadAll() {
    fetch('/files')
      .then(response => response.json())
      .then((data) => { this.setState({
        filelist: data.files,
        taglist: data.tags,
        archive: data.archive,
        loaded: true
      })
    }).catch((err) => console.log(err));
  }

  componentDidMount() {
    this.loadAll();
  }

  render () {
    return (
      <div id="blog">
        <Header page="blog"/>
          <h1 id="title">
            Jon Powers
          </h1>
          <h2 id="subtitle">
            Has a blog
          </h2>
        <div className="ui grid">
          <div className="two wide column tag">
            <div id="tags">
            <h3>Tags</h3>
              {!this.state.loaded ?
                <Loader active inline='centered' /> :
                <TagList
                  list={this.state.taglist}
                  loadTag={(tag) => this.loadTag.bind(this, tag)}
                  filtered={this.state.tag_filter}/>
              }
            </div>
          </div>
          <div className="twelve wide column">
            <div id="feed">
              {!this.state.loaded ?
                <div className="post ui segment">
                  <Loader active size='huge' inline='centered'>Loading...</Loader>
                </div> :
                <Feed
                  list={this.state.filelist}
                  loadTag={(tag) => this.loadTag.bind(this, tag)}/>
              }
            </div>
          </div>
          <div className="two wide column month">
            <div id="archive">
            <h3>Archive</h3>
              {!this.state.loaded ?
                <Loader active inline='centered' /> :
                <Archive
                  list={this.state.archive}
                  loadMonth={(month) => this.loadMonth.bind(this, month)}
                  filtered={this.state.month_filter}/>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Blog;
