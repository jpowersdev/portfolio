import React from 'react'
import { Link } from 'react-router-dom'

import Header from './header.jsx'

import '../styles/home.styl'

class Home extends React.Component {
  render () {
    return (
      <div id="page1">
        <Header page="home"/>
        <div id="brand">
          <h1>Jon Powers</h1>
          <h2>Fullstack Web Developer</h2>
          <h3>Node.js / HTML5 / CSS3</h3>
        </div>
      </div>
    )
  }
}

export default Home;
