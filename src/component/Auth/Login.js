import React, { Component } from 'react';
import { app , gmailProvider } from '../../config/base'

import './Auth.css'

class Login extends Component {
   loginWithGmail = e => {
      e.preventDefault()
      app.auth().signInWithPopup(gmailProvider).then(result => {
         console.log(result)
      }).catch(error => {
         console.log(error)
      })
   }

   login = e => {
      e.preventDefault()
      alert('still develop')
   }

   render() {
      return (
         <div className='container-login'>
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <form>
                     <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control"
                           name='username'
                        />
                     </div>
                     <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                           name='password'
                        />
                     </div>
                     <div className="form-group">
                        <a href="" className="btn btn-login"
                           onClick={this.login}
                        >Login</a>
                     </div>
                     <div className="form-group">
                        <a href="" className="btn btn-login-gmail"
                           onClick={this.loginWithGmail}
                        >Login With Gmail</a>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         </div>
      );
   }
}

export default Login;