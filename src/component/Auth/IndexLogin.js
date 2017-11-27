import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './Auth.css'

class IndexLogin extends Component {
   render() {
      return (
         <div className='container-auth'>
            <div className="title">Foodie Recipes</div>
            <div className="subtitle">Lorem ipsum dolor sit amet</div>
            <Link to='/login' className="btn btn-signin">Sign In</Link>
            <Link to='/register' className="btn btn-signup">Sign Up</Link>
            {/* <div className="trademark">The registered account indicates that you agree to our
               terms of service and privacy statement
            </div> */}
         </div>
      );
   }
}

export default IndexLogin;