import React, { Component } from 'react';
import { app , gmailProvider } from '../../config/base'
class Login extends Component {
   loginWithGmail = e => {
      e.preventDefault()
      app.auth().signInWithPopup(gmailProvider).then(result => {
         console.log(result)
      }).catch(error => {
         console.log(error)
      })
   }

   render() {
      return (
         <div>
            <h2>Login ...</h2>
            <a href="" className="btn btn-success"
               onClick={this.loginWithGmail}
            >Login With Gmail</a>
         </div>
      );
   }
}

export default Login;