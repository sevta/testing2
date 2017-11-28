import React, { Component } from 'react'
import { app , base } from '../../config/base'

class FriendList extends Component {
   constructor(props) {
      super(props)
   }

   follow = e => {
      e.preventDefault()
      this.props.follow(this.props.user)
   }

   render() {
      return (
         <div style={{display: 'flex'}}>
            <p>{this.props.user.username}</p>
            <a href="" className="btn btn-info btn-sm" onClick={this.follow}>Follow</a>
         </div>
      );
   }
}

export default FriendList;