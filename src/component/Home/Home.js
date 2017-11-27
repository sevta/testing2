import React, { Component } from 'react'
import { app } from '../../config/base'
import { connect } from 'react-redux'

class Hom extends Component {
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
      return (
         <div>
            <h3>Home ... {}</h3>
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