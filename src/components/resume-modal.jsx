import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

var resume = require('../docs/jonpowers_resume2017.pdf');

class ResumeModal extends React.Component {
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
        trigger={<a id="resume" href="#" onClick={this.handleOpen}>Resume</a>}
        open={this.state.modalOpen}
        dimmer="blurring"
        >
        <Modal.Content>
          <iframe id="resume_modal" src={resume}></iframe>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} className="ui cancel button">Close</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ResumeModal;
