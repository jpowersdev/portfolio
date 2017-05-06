import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

import '../images/authtime.png'
import '../images/autonursenote.png'
import '../images/jpow.png'
import '../images/patientrounds.png'
import '../images/portrait.png'
import '../images/sjcuisine.png'

import '../docs/jonpowers_resume2017.pdf'

import '../styles/style.css'
import '../scripts/main.js'

class WorkModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  render () {
    return (
      <Modal
        open={this.state.modalOpen}
        dimmer="blurring"
        trigger={
          <a id="work" href="#" onClick={this.handleOpen}>Work</a>
        }>
        <Modal.Header className="header">
          <h3>
            My Work
          </h3>
        </Modal.Header>
        <Modal.Content className="content">
          <div className="ui divided items">
            <div className="item">
              <div className="image">
                <a id="jpow_img" href="./images/jpow.png">
                  <Image
                    className="work_img"
                    src="./images/jpow.png" />
                </a>
              </div>
              <div className="content">
                <a className="header">
                  This Site
                </a>
                <div className="description">
                  <p>
                    Designed using Semantic-UI, React.js, and Node.js <br />
                    Fonts are Poiret One and Open Sans
                </p>
              </div>
              <div className="extra">
                <div className="ui label">HTML</div>
                <div className="ui label">Javscript</div>
                <div className="ui label">Semantic-UI</div>
                <div className="ui label">Node.js</div>
                <div className="ui label">React.js</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="image">
              <a
                href="http://southjerseycuisine.com.s3-website-us-east-1.amazonaws.com/"
                target="_blank">
                <Image
                  className="work_img"
                  src="./images/sjcuisine.png" />
              </a>
            </div>
            <div className="content">
              <a className="header">
                SJ Cuisine
              </a>
              <div className="description">
                <p>
                  This was for fun, because I like to eat good food<br />
                Work potentially in progress
              </p>
            </div>
            <div className="extra">
              <div className="ui label">HTML</div>
              <div className="ui label">Javscript</div>
              <div className="ui label">
                Bootstrap 3
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <a id="authtime_img" href="./images/authtime.png" target="_blank">
              <Image
                className="work_img"
                src="./images/authtime.png" />
            </a>
          </div>
          <div className="content">
            <h4 className="header">
              Auth Time
            </h4>
            <a href="https://github.com/jonpowers/authtime">
              <i className="large github icon" />
            </a>
            <div className="description">
              <p>
                How many days does this authorization last?
              </p>
            </div>
            <div className="extra">
              <div className="ui label">Javscript</div>
              <div className="ui label">Node.js</div>
              <div className="ui label">Electron</div>
              <div className="ui label">React</div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <a id="autonursenote_img" href="./images/autonursenote.png" target="_blank">
              <Image
                className="work_img"
                src="./images/autonursenote.png" />
            </a>
          </div>
          <div className="content">
            <a className="header">
              Auto Nurse Note
            </a>
            <div className="description">
              <p>
                Let's track our nurse's notes by auto-generating barcodes
              </p>
            </div>
            <div className="extra">
              <div className="ui label">.NET</div>
              <div className="ui label">C#</div>
              <div className="ui label">WPF</div>
              <div className="ui label">
                Entity Framework
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <a id="patientrounds_img" href="./images/patientrounds.png" target="_blank">
              <Image className="work_img" src="./images/patientrounds.png"/>
            </a>
          </div>
          <div className="content">
            <a className="header">
              Patient Rounds
            </a>
            <div className="description">
              <p>
                Instead of storing Patient information in a MS Access file, let's toss it in a database and make a more intuitive UI
              </p>
            </div>
            <div className="extra">
              <div className="ui label">.NET</div>
              <div className="ui label">C#</div>
              <div className="ui label">WPF</div>
              <div className="ui label">
                Entity Framework
              </div>
              <div className="ui label">Async</div>
            </div>
          </div>
        </div>
      </div>
    </Modal.Content>
    <Modal.Actions>
      <Button onClick={this.handleClose} className="ui cancel button">Close</Button>
    </Modal.Actions>
  </Modal>
    )
  }
}

class ContactModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = (e) => this.setState({
    modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })
  render () {
    return (
      <Modal
        trigger={<a id="contact" href="#" onClick={this.handleOpen}>Contact</a>}
        open={this.state.modalOpen}
        dimmer="blurring"
        >
        <Modal.Header>
          <h3>
            How to Find Me
          </h3>
        </Modal.Header>
        <Modal.Content>
          <div className="ui grid">
            <div className="eleven wide column">
              <div className="ui list">
                <div className="item">
                  <i className="marker icon" />
                  <div className="content">
                    South Jersey &amp; Philadelphia
                  </div>
                </div>
                <br />
                <div className="item">
                  <i className="mail icon" />
                  <div className="content">
                    <a href="mailto:dev@jpow.io">dev@jpow.io</a>
                  </div>
                </div>
                <div className="item">
                  <i className="call icon" />
                  <div className="content">
                    <a href="tel:+1-609-521-8786">
                      609 521 8786
                    </a>
                  </div>
                </div>
                <div className="item">
                  <i className="github middle aligned icon" />
                  <div className="content">
                    <a
                      href="https://github.com/jonpowers"
                      target="_blank">github.com/jonpowers</a>
                  </div>
                </div>
                <div className="item">
                  <i className="linkedin square icon" />
                  <div className="content">
                    <a
                      href="https://www.linkedin.com/in/jonathan-powers-297293127/"
                      target="_blank">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="five wide column">
              <div className="ui medium image">
                <Image
                  className="image"
                  src="./images/portrait.png" />
              </div>
            </div>
        </div>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} className="ui cancel button">Close</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}


class Home extends React.Component {
  render () {
    return (
      <div id="page1">
        <div id="header">
          <div className="ui grid">
            <div className="four wide column">
              <a href="./docs/jonpowers_resume2017.pdf" target="_blank">Resume</a>
            </div>
            <div className="four wide column">
              <WorkModal/>
            </div>
            <div className="four wide column">
              <ContactModal/>
            </div>
            <div className="four wide column">
              <Link id="blog" to="/blog">Blog</Link>
            </div>
          </div>
        </div>
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
