import React from 'react'
import {Link} from 'react-router-dom'

import '../styles/post.styl'

class Post extends React.Component {
  render() {
    return (
      <div className="">
        <img className="d-flex" src="https://a.thumbs.redditmedia.com/WOzzebh3Ij6DjrYN3OISlv4c_kdkQFjzcgVO9_nMYy0.jpg"></img>
          <h5>List-based media object</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
    )
  }
};

export default Post;
