import React from 'react'

class TagList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: props.list
    }
  }

  render () {
    const Tag = (props) => (
      <p className="tag">{props.value}</p>
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
