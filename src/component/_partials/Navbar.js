import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class componentName extends Component {
   render() {
      return (
         <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
               <a class="navbar-brand" href="#">Navbar</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarColor01">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item active">
                     <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                     </li>
                     <li class="nav-item">
                     <Link to='/profile' class="nav-link">Profile</Link>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link" href="#">Pricing</a>
                     </li>
                     <li class="nav-item">
                     <a class="nav-link" href="#">About</a>
                     </li>
                  </ul>
               </div>
               </nav>
         </div>
      );
   }
}

export default componentName;