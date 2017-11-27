import React, { Component } from 'react'
import { app } from '../../config/base'
import { connect } from 'react-redux'

class Hom extends Component {
   constructor(props) {
      super(props)
      this.state = {
         user: this.props.auth.user
      }
   }
   logout = e => {
      e.preventDefault()
      app.auth().signOut().then(() => {
         console.log('outed')
      })
   }

   componentDidUpdate() {
      console.log(this.props.auth)
   }

   render() {
      const { auth } = this.props
      return (
         <div>
            {this.state.user === null ? (
               <h1> hy..</h1>
            ) : null}
            <a href="" className="btn btn-danger btn-sm"
               onClick={this.logout}
            >Logout</a>
         </div>
      );
   }
}

const stateToProps = state => {
   return {
      auth: state.auth
   }
}

export default connect(stateToProps)(Hom);