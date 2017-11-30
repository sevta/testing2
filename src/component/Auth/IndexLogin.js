import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../styles/global'
import { app , base , facebookPorvider } from '../../config/base'

import './Auth.css'

class IndexLogin extends Component {
   loginWithFacebook = e => {
      e.preventDefault()
      app.auth().signInWithPopup(facebookPorvider).then(result => {
         console.log(result)
      })
   }
   render() {
      return (
         <div className='container-auth'>
            <div className="title">Foodie Recipes</div>
            <div className="subtitle">Lorem ipsum dolor sit amet</div>
            <Link to='/login' style={{marginTop: 190}}>
               <Button primary>Login</Button>
            </Link>
            <Link to='/register' style={{marginTop: 15}}>
               <Button secondary>Sign Up</Button>
            </Link>
            <a href="" className="btn btn-success btn-sm" onClick={this.loginWithFacebook}>Login With Facebook</a>
            <div className="trademark">The registered account indicates that you agree to our
               terms of service and privacy statement
            </div>
         </div>
      );
   }
}

export default IndexLogin;