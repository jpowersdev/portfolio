import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

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
          <h3 className="contact-header">
            How to Find Me
          </h3>
        </Modal.Header>
        <Modal.Content>
          <div className="ui grid contact">
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

export default ContactModal;
