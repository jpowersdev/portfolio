import React from 'react'
import { Button } from 'semantic-ui-react'
import Moment from 'moment'

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archive: props.list
    }
  }

  render () {
    const TimeStamp = (props) => (
      <Button className="timestamp" onClick={this.props.loadMonth(props.value)}>
        {this.props.filtered ? <i className="fa fa-times"/> : <span></span>} {Moment(props.value, "MMM DD YYYY").format("MMM YYYY")}
      </Button>
    )
    const archive = this.state.archive.map((item, index) =>
      <TimeStamp key={index} value={item}/>
    );
    return (
      <div>
        {archive}
      </div>
    );
  }
}

export default Archive;
