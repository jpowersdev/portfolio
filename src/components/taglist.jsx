import React from 'react'
import { Button } from 'semantic-ui-react'

class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: props.list
    }
  }

  render () {
    const Tag = (props) => (
      <Button className="tag" onClick={this.props.loadTag(props.value)}>{props.value}</Button>
    )
    const taglist = this.state.tags.map((item, index) =>
      <Tag key={index} value={item}/>
    );
    return (
      <div>
        {taglist}
      </div>
    );
  }
}

export default TagList;
