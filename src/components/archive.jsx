import React from 'react'
import Moment from 'moment'

class Archive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archive: props.list
    }
  }

  render () {
    const Timestamp = (props) => (
      <p className="timestamp">{Moment(props.value, "MMM DD YYYY").format("MMM YYYY")}</p>
    )
    const archive = this.state.archive.map((item, index) =>
      <Timestamp key={index} value={item}/>
    );
    return (
      <div>
        {archive}
      </div>
    );
  }
}

export default Archive;
