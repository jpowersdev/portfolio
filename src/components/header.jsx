import React from 'react'
import { Link } from 'react-router-dom'

import WorkModal from './work-modal.jsx'
import ContactModal from './contact-modal.jsx'
import ResumeModal from './resume-modal.jsx'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: props.page
    }
  }
  render () {
    return (
      <div id="header">
        <div className="ui grid">
          <div className="four wide column">
            {this.state.page == 'blog' ?
              <Link to="/">Home</Link> :
              <Link to="/blog">Blog</Link>
            }
          </div>
          <div className="four wide column">
            <ResumeModal/>
          </div>
          <div className="four wide column">
            <WorkModal/>
          </div>
          <div className="four wide column">
            <ContactModal/>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}


export default Header;
