import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../styles/global'

import './Auth.css'

class IndexLogin extends Component {
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
            <div className="trademark">The registered account indicates that you agree to our
               terms of service and privacy statement
            </div>
         </div>
      );
   }
}

export default IndexLogin;